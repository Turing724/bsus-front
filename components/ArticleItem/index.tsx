import dayjs from "dayjs";
import "./index.less";
import Link from "next/link";

export default ({ item }) => {
  return (
    <div id="ArticleItem">
      <Link href={`/article/${item.id}`}>
        <div className="thumb" style={{ backgroundImage: "url(/examplearticle.jpg)" }}></div>
      </Link>
      <div className="article-item-content">
        <Link href={`/article/${item.id}`}>
          <h1>{item.title}</h1>
        </Link>

        <p className="desc">{item.description}</p>
        <div className="foot">
          <div className="info">
            {item.category
              ? [
                  <i className="iconfont bsuscategory" key={0}></i>,
                  <Link key={1} href={`/category/${item.category.id}`}>
                    <span>{item.category.name}</span>
                  </Link>
                ]
              : ""}
            {item.tag.length
              ? [
                  <i className="iconfont bsusCategoryanalysis" key={0}></i>,
                  item.tag.map((x, i) => (
                    <Link key={i + 1} href={`/tag/${x.id}`}>
                      <span>{x.name}</span>
                    </Link>
                  ))
                ]
              : ""}
          </div>
          <div className="date">{dayjs(item.updatedAt).format("YYYY-MM-DD")}</div>
        </div>
      </div>
    </div>
  );
};
