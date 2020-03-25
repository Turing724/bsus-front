import "./index.less";
import Link from "next/link";

export default () => {
  return (
    <footer>
      <div className="wrapper foot-con">
        <div>
          <div className="foot-menu">
            <Link href="/">
              <div>首页</div>
            </Link>
            <Link href="/category">
              <div>分类</div>
            </Link>
          </div>
          <p className="copyright">Copyright © 2020 Baishiup. Power By Next.js and Nest.js</p>
        </div>
        <div className="links">
          <div className="qq">
            <i className="iconfont bsusqq_fill"></i>
          </div>
          <div className="wechat">
            <i className="iconfont bsuswechat-fill"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};
