import "./index.less";
import Link from "next/link";

interface Props {
  readonly handleTheme: Function;
  readonly theme: any;
}

export default (props: Props) => {
  function changeTheme() {
    props.handleTheme(props.theme === "light" ? "dark" : "light");
  }
  return (
    <header>
      <div className="wrapper" style={{ padding: "15px 0", marginBottom: "48px" }}>
        <Link href="/">
          <img src="/logo.png" className="logo" alt="" />
        </Link>
        <nav>
          <ul className="navs">
            <Link href="/">
              <li>首页</li>
            </Link>
            <Link href="/category">
              <li>分类</li>
            </Link>
            <Link href="/tag">
              <li>标签</li>
            </Link>
            <Link href="/project">
              <li>项目</li>
            </Link>
            <Link href="/about">
              <li>联系</li>
            </Link>
          </ul>
          <ul className="tools">
            <li onClick={changeTheme}>
              <i className={`iconfont ${props.theme === "light" ? " bsus-moon" : " bsus-moon-fill"}`}></i>
            </li>
            <li>
              <i className="iconfont bsuschaxun"></i>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
