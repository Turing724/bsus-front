import axios from "../../helpers/axios";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import SwiperPagination from "../../components/SwiperPagination";
import SideBar from "../../components/SideBar";
import Link from "next/link";
import ArticleItem from "../../components/ArticleItem";

import { useState } from "react";
import "./index.less";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Index = ({ categorys, tags, articles, banners, err }) => {
  if (err) {
    console.log(err);
  }

  const [bannerIndex, setBannerIndex] = useState(0);
  const [categoryId, setCategoryId] = useState<string | number>("");
  const [articleList, setArticleList] = useState(articles);

  async function handleCategory(id) {
    setCategoryId(id);
    getArticle(id);
  }

  async function getArticle(id = "") {
    const req = {
      category: id
    };
    const res = await axios.get("/article", { params: req });
    setArticleList(res.data.list);
  }
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
      <div className="swiper">
        <AutoPlaySwipeableViews interval={3000} index={bannerIndex} onChangeIndex={setBannerIndex} enableMouseEvents>
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
          <div className="category">
            <div onClick={_ => handleCategory("")} className={`category-item ${categoryId === "" ? "active" : ""}`}>
              全部
            </div>
            {categorys.map((x, i) => (
              <div onClick={_ => handleCategory(x.id)} className={`category-item ${categoryId === x.id ? "active" : ""}`} key={i}>
                {x.name}
              </div>
            ))}
          </div>
          <div className="article">
            {articleList.map((article, i) => (
              <ArticleItem key={i} item={article}></ArticleItem>
            ))}
          </div>
        </div>
        <div className="sidebar-box">
          <SideBar tags={tags} categorys={categorys}></SideBar>
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
    err: null
  };
  try {
    let article = await axios.get("/article");
    let tag = await axios.get("/tag");
    let category = await axios.get("/category");
    dataSource.articles = article.data.list;
    dataSource.tags = tag.data.list;
    dataSource.categorys = category.data.list;
    dataSource.banners = article.data.list;
    return dataSource;
  } catch (error) {
    dataSource.err = error;
    return dataSource;
  }
};

export default Index;
