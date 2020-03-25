import Axios from "../../helpers/Axios";
import { useRouter } from "next/router";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import SwiperPagination from "../../components/SwiperPagination";
import SideBar from "../../components/SideBar";
import Link from "next/link";
import ArticleItem from "../../components/ArticleItem";

import { useState } from "react";
import "./index.less";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export async function getStaticProps() {
  const articles = await Axios.get("/article");
  const tags = await Axios.get("/tag");
  const categorys = await Axios.get("/category");
  return {
    props: {
      tags: tags.data,
      categorys: categorys.data,
      articles: articles.data,
      bannerList: articles.data.list.filter((x, i) => i < 5)
    }
  };
}

export default ({ categorys, tags, articles, bannerList }) => {
  const router = useRouter();

  const [bannerIndex, setBannerIndex] = useState(0);
  const [categoryId, setCategoryId] = useState<string | number>("");
  const [articleList, setArticleList] = useState(articles.list);

  async function handleCategory(id) {
    setCategoryId(id);
    getArticle(id);
  }

  async function getArticle(id = "") {
    const req = {
      category: id
    };
    const res = await Axios.get("/article", { params: req });
    setArticleList(res.data.list);
  }
  function detePass(date) {
    const t = (new Date().valueOf() - new Date(date).valueOf()) / 1000;
    if (t < 60) {
      return t + "秒前";
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
        <AutoPlaySwipeableViews interval={300000} index={bannerIndex} onChangeIndex={setBannerIndex} enableMouseEvents>
          {bannerList.map((x, i) => (
            <div className="swiper-item" key={i}>
              <div className="pic">
                <div style={{ backgroundImage: "url(/examplearticle.jpg)" }}></div>
              </div>
              <div className="content">
                <Link href={`/article/${x.id}`}>
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
        <SwiperPagination length={bannerList.length} index={bannerIndex} handleChangeIndex={setBannerIndex}></SwiperPagination>
      </div>

      <div className="container">
        <div className="main">
          <div className="category">
            <div onClick={_ => handleCategory("")} className={`category-item ${categoryId === "" ? "active" : ""}`}>
              全部
            </div>
            {categorys.list.map((x, i) => (
              <div onClick={_ => handleCategory(x.id)} className={`category-item ${categoryId === x.id ? "active" : ""}`} key={i}>
                {x.name}
                {x.id}
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
          <SideBar tags={tags.list}></SideBar>
        </div>
      </div>
    </div>
  );
};
