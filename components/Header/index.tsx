import "./index.less";

import Link from "next/link";
import { useState, useEffect } from "react";

export default () => {
  const [collapse, setCollapse] = useState(true);
  useEffect(() => {
    document.body.style.overflow = collapse ? "" : "hidden";
  }, [collapse]);

  return (
    <div>
      <header>
        <div className="wrapper">
          <div className="nav-toggler" onClick={_ => setCollapse(false)}>
            <i className="iconfont bsusmenu"></i>
          </div>
          <Link href="/">
            <img src="/logo.png" className="logo" alt="" />
          </Link>
          <div className="nav-toggler">
            <i className="iconfont bsuschaxun"></i>
          </div>

          <nav>
            <ul className="navs">
              <Link href="/">
                <li>首页</li>
              </Link>
              <Link href="/project">
                <li>项目</li>
              </Link>
              <Link href="/about">
                <li>联系</li>
              </Link>
            </ul>
            <ul className="tools">
              <li>
                <i className="iconfont bsuschaxun"></i>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className={`nav-toggler mobile-nav ${collapse ? "" : "show"}`}>
        <div className="mask" onClick={_ => setCollapse(true)}></div>
        <div className="mobile-nav-container">
          <div className="head">
            <i className="iconfont bsusradio-button-line" onClick={_ => setCollapse(true)}></i>
          </div>
          <ul className="menu" onClick={_ => setCollapse(true)}>
            <Link href="/">
              <li>
                <i className="iconfont bsushome"></i>首页
              </li>
            </Link>
            <Link href="/project">
              <li>
                <i className="iconfont bsusactions49"></i>项目
              </li>
            </Link>
            <Link href="/about">
              <li>
                <i className="iconfont bsusabout"></i>联系
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
