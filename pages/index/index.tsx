import axios from "../../helpers/axios";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import SwiperPagination from "../../components/SwiperPagination";
import SideBar from "../../components/SideBar";
import Link from "next/link";
import ArticleItem from "../../components/ArticleItem";
import WebHead from "../../components/WebHead";

import { useState } from "react";
import "./index.less";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Index = ({ categorys, tags, articles, banners, setting, err }) => {
  if (err) {
    console.log(err);
  }
  const { avatar, sitename, keywords, description } = setting;

  const [bannerIndex, setBannerIndex] = useState(0);

  function detePass(date) {
    const t = (new Date().valueOf() - new Date(date).valueOf()) / 1000;
    if (t < 60) {
      return Math.floor(t) + "秒前";
    } else if (t < 60 * 60) {
      return Math.floor(t / 60) + "分钟前";
    } else if (t < 60 * 60 * 24) {
      return Math.floor(t / (60 * 60)) + "小时前";
    } else {
      return Math.floor(t / (60 * 60 * 24)) + "天前";
    }
  }
  return (
    <div id="Index">
      <WebHead title="baishiup's website" setting={setting}></WebHead>

      <div className="swiper">
        <AutoPlaySwipeableViews interval={3000} index={bannerIndex | 0} onChangeIndex={setBannerIndex} enableMouseEvents>
          {banners.map((x, i) => (
            <div className="swiper-item" key={i}>
              <div className="pic">
                <div style={{ backgroundImage: `url(${x.thumb})` }}></div>
              </div>
              <div className="content">
                <Link as={`/article/${x.id}`} href="/article/[id]">
                  <h2>{x.title}</h2>
                </Link>
                <p>{x.description}</p>
                <div className="foot">
                  <span>{x.category.name}</span>
                  <i className="separator"></i>
                  <span>{detePass(x.updatedAt)}</span>
                </div>
              </div>
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <SwiperPagination length={banners.length} index={bannerIndex} handleChangeIndex={setBannerIndex}></SwiperPagination>
      </div>

      <div className="container">
        <div className="main">
          <div className="article">
            {articles.map((article, i) => (
              <ArticleItem key={i} item={article}></ArticleItem>
            ))}
          </div>
        </div>
        <div className="sidebar-box">
          <SideBar tags={tags} categorys={categorys} avatar={avatar}></SideBar>
        </div>
      </div>
    </div>
  );
};

Index.getInitialProps = async function() {
  const dataSource = {
    articles: [],
    tags: [],
    categorys: [],
    banners: [],
    setting: {},
    err: null
  };
  try {
    let article = await axios.get("/article");
    let tag = await axios.get("/tag");
    let category = await axios.get("/category");
    let setting = await axios.get("/setting");
    dataSource.articles = article.data.list;
    dataSource.tags = tag.data.list;
    dataSource.categorys = category.data.list;
    dataSource.banners = article.data.list;
    dataSource.setting = setting.data.map;
    return dataSource;
  } catch (error) {
    dataSource.err = error;
    return dataSource;
  }
};

export default Index;
