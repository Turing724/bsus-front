import axios from "../../helpers/axios";
import Link from "next/link";
import SideBar from "../../components/SideBar";
import dayjs from "dayjs";

import "../../styles/github-markdown.less";
import "../../styles/highlight.github.less";
import "./[id].less";

const articleContent = ({ article, tags, relates }) => {
  return (
    <div id="ArticleContent">
      <div className="breadcrumbs">
        <Link href="/">
          <span className="href">我的主页</span>
        </Link>
        <span className="sep">›</span>
        {article.category
          ? [
              <Link href={`/article?category=${article.category.id}`} key={1}>
                <span className="href">{article.category.name}</span>
              </Link>,
              <span className="sep" key="2">
                ›
              </span>
            ]
          : ""}
        <span className="current">{article.title}</span>
      </div>
      <div className="row">
        <div className="main">
          <div className="card" style={{ padding: "20px" }}>
            <div className="header">
              <div>
                {article.category ? (
                  <Link href={`/article?category=${article.category.id}`}>
                    <span className="category">#{article.category.name}#</span>
                  </Link>
                ) : (
                  ""
                )}
              </div>
              <h1>{article.title}</h1>
              <time>{dayjs(article.updatedAt).format("YYYY-MM-DD HH:mm")}</time>
            </div>
            <div className="markdown-body content" dangerouslySetInnerHTML={{ __html: article.html }}></div>
          </div>
          {relates.length ? (
            <div className="related">
              <p className="columns-title">
                <i className="iconfont bsus1000"></i>
                相关
              </p>
              <ul className="content card" style={{ padding: "20px" }}>
                {relates.map(x => (
                  <Link href="/article/[id]" as={`/article/${x.id}`} key={x.id}>
                    <li key={x.id}>{x.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="sidebar">
          <SideBar tags={tags} categorys={[]}></SideBar>
        </div>
      </div>
    </div>
  );
};

articleContent.getInitialProps = async function(context) {
  const id = context.query["id"];
  const res = await axios.get(`/article/${id}`);
  const tags = await axios.get("/tag");

  let relates = [];
  if (res.data.map.tag.length) {
    let relatesdata = await axios.get(`/article?tag=${res.data.map.tag[0].id}`);
    relates = relatesdata.data.list.filter(x => x.id !== res.data.map.id);
  }
  return { article: res.data.map, tags: tags.data.list, relates, categorys: [] };
};

export default articleContent;
