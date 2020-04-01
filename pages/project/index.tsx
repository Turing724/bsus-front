import axios from "../../helpers/axios";
import "./index.less";

const project = ({ repos }) => {
  console.log(repos);
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
    <div id="Project">
      <h1>Project</h1>
      <div className="row">
        {repos.map((x, i) => (
          <a href={x.html_url} target="_blank" className="card item" key={i}>
            <div className="name">
              <i className="iconfont bsuszuoshuangxiexian"></i>
              <p>{x.name}</p>
            </div>
            <div className="desc">{x.description}</div>
            <div className="info">
              <span>{x.language}</span>
              <span>{detePass(x.updated_at)}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

project.getInitialProps = async () => {
  const repos = await axios.get("/github/getRepos");
  return { repos: repos.data.list.sort((a, b) => new Date(b.updated_at).valueOf() - new Date(a.updated_at).valueOf()) };
};

export default project;
