import axios from "../../helpers/axios";
import SideBar from "../../components/SideBar";
import Link from "next/link";
import ArticleItem from "../../components/ArticleItem";

import "./index.less";

const ArtList = ({ articles, categoryInfo, tagInfo, categorys, tags }) => {
  const column = categoryInfo ? (
    <div className="column" style={{ backgroundImage: `url(${categoryInfo.thumb})` }}>
      <div className="info">
        <p>{categoryInfo.name}</p>
        <p>
          <i className="iconfont bsuscategory"></i>
          {articles.length}篇
        </p>
      </div>
    </div>
  ) : (
    ""
  );

  return (
    <div id="ArtList">
      <div className="breadcrumbs">
        <Link href="/">
          <span className="href">我的主页</span>
        </Link>
        <span className="sep">›</span>
        {/* <span className="current">{categoryInfo.name}</span> */}
      </div>
      <div className="main">
        <div className="content">
          {column}
          {articles.map((x, i) => (
            <ArticleItem item={x} key={i}></ArticleItem>
          ))}
        </div>
        <div style={{ marginLeft: "30px", width: "33%" }}>
          <SideBar tags={tags} categorys={categorys}></SideBar>
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
    categorys: []
  };
  const params = [];

  if (query.category) {
    params.push(`category=${query.category}`);
    const categoryInfo = await axios.get(`/category/${query.category}`);
    dataSource.categoryInfo = categoryInfo.data.map;
    console.log(categoryInfo);
  }
  if (query.tag) {
    params.push(`tag=${query.tag}`);
    const tagInfo = await axios.get(`/tag/${query.tag}`);
    console.log(tagInfo.data);
    dataSource.tags = tagInfo.data.map;
  }

  const tag = await axios.get("/tag");
  const category = await axios.get("/category");
  const arts = await axios.get(`/article?${params.join("&")}`);

  dataSource.tags = tag.data.list;
  dataSource.categorys = category.data.list;
  dataSource.articles = arts.data.list;

  return dataSource;
};

export default ArtList;
