import Axios from "../../../helpers/Axios";
import Link from "next/link";
import SideBar from "../../../components/SideBar";
import dayjs from "dayjs";

import "../../../styles/github-markdown.less";
import "../../../styles/highlight.github.less";
import "./index.less";

const articleContent = ({ article, tags }) => {
  return (
    <div id="ArticleContent">
      <div className="breadcrumbs">
        <Link href="/">
          <span className="href">我的主页</span>
        </Link>
        <span className="sep">›</span>
        {article.map.category
          ? [
              <Link href={`/category${article.map.category.id}`} key={1}>
                <span className="href">{article.map.category.name}</span>
              </Link>,
              <span className="sep" key="2">
                ›
              </span>
            ]
          : ""}
        <span className="current">{article.map.title}</span>
      </div>
      <div className="row">
        <div className="card main">
          <div className="header">
            <div>
              {article.map.category ? (
                <Link href={`/category/${article.map.category.id}`}>
                  <span className="category">#{article.map.category.name}#</span>
                </Link>
              ) : (
                ""
              )}
            </div>
            <h1>{article.map.title}</h1>
            <time>{dayjs(article.map.updatedAt).format("YYYY-MM-DD HH:mm")}</time>
          </div>
          <div className="markdown-body content" dangerouslySetInnerHTML={{ __html: article.map.html }}></div>
        </div>
        <div className="sidebar">
          <SideBar tags={tags.list}></SideBar>
        </div>
      </div>
    </div>
  );
};

articleContent.getInitialProps = async function(context) {
  const id = context.query[":id"];
  const res = await Axios.get(`/article/${id}`);
  const tags = await Axios.get("/tag");
  return { article: res.data, tags: tags.data };
};

export default articleContent;
