import "./index.less";
import dayjs from "dayjs";
import Link from "next/link";

export default ({ tags }) => {
  return (
    <div id="sidebar">
      <div className="sidebar-item card author-box">
        <div className="head">
          <p>{dayjs().format("DD")}</p>
          <p>{dayjs().format("MM月,YYYY")}</p>
        </div>
        <div className="avatar">
          <img src="/avatar.png" alt="" />
        </div>
        <div className="body">
          <p className="name">Baishiup</p>
        </div>
      </div>
      <div className="sidebar-item card tags-box">
        <div className="sidebar-item-header">标签</div>
        <div className="sidebar-item-content">
          {tags.map((x, i) => (
            <Link key={i} href={`/tag/${x.id}`}>
              <div className="tag">
                {x.name}({x.articles.length})
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
