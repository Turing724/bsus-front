import "./index.less";

export default () => {
  return (
    <footer>
      <div className="wrapper foot-con">
        <div>
          <p className="copyright">Copyright © 2020 Baishiup. Power By Next.js and Nest.js</p>
        </div>
        <div className="links">
          <div className="qq">
            <i className="iconfont bsusqq_fill"></i>
          </div>
          <div className="wechat">
            <i className="iconfont bsuswechat-fill"></i>
          </div>
          <div className="git">
            <i className="iconfont bsusgit"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};
