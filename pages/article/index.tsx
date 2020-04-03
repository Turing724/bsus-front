import axios from "../../helpers/axios";
import SideBar from "../../components/SideBar";
import Link from "next/link";
import ArticleItem from "../../components/ArticleItem";
import "./index.less";
import { ReactElement } from "react";
import WebHead from "../../components/WebHead";

const ArtList = ({ articles, categoryInfo, tagInfo, categorys, tags, query, setting }) => {
  let column: string | ReactElement = "";
  if (query.category && categoryInfo) {
    column = (
      <div className="column" style={{ backgroundImage: `url(${categoryInfo.thumb})` }}>
        <div className="info">
          <p>{categoryInfo.name}</p>
          <p>
            <i className="iconfont bsuscategory"></i>
            {articles.length}篇
          </p>
        </div>
      </div>
    );
  } else if (query.tag && tagInfo) {
    column = (
      <div className="column" style={{ backgroundImage: `url(${tagInfo.thumb})` }}>
        <div className="info">
          <p>#{tagInfo.name}</p>
          <p>
            <i className="iconfont bsuscategory"></i>
            {articles.length}篇
          </p>
        </div>
      </div>
    );
  }

  let breadcrumbsCurrent: string | ReactElement = "";
  if (query.category && categoryInfo) {
    breadcrumbsCurrent = <span className="current">分类：{categoryInfo.name}</span>;
  } else if (query.tag && tagInfo) {
    breadcrumbsCurrent = <span className="current">#{tagInfo.name}</span>;
  } else {
    breadcrumbsCurrent = <span className="current">文章列表</span>;
  }
  return (
    <div id="ArtList">
      <WebHead title="文章列表" setting={setting}></WebHead>
      <div className="breadcrumbs">
        <Link href="/">
          <span className="href">我的主页</span>
        </Link>
        <span className="sep">›</span>
        {breadcrumbsCurrent}
      </div>
      <div className="main">
        <div className="content">
          {column}
          {articles.map((x, i) => (
            <ArticleItem item={x} key={i}></ArticleItem>
          ))}
        </div>
        <div className="sidebar">
          <SideBar tags={tags} categorys={categorys} avatar={setting.avatar}></SideBar>
        </div>
      </div>
    </div>
  );
};

ArtList.getInitialProps = async context => {
  const { query } = context;
  const dataSource = {
    articles: [],
    categoryInfo: null,
    tagInfo: null,
    tags: [],
    categorys: [],
    query,
    setting: {}
  };
  const params = [];

  if (query.category) {
    params.push(`category=${query.category}`);
    const categoryInfo = await axios.get(`/category/${query.category}`);
    dataSource.categoryInfo = categoryInfo.data.map;
  }
  if (query.tag) {
    params.push(`tag=${query.tag}`);
    const tagInfo = await axios.get(`/tag/${query.tag}`);
    dataSource.tagInfo = tagInfo.data.map;
  }

  const tag = await axios.get("/tag");
  const category = await axios.get("/category");
  const arts = await axios.get(`/article?${params.join("&")}`);
  const setting = await axios.get("/setting");

  dataSource.tags = tag.data.list;
  dataSource.categorys = category.data.list;
  dataSource.articles = arts.data.list;
  dataSource.setting = setting.data.map;

  return dataSource;
};

export default ArtList;
