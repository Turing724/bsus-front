import "./index.less";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";

type themeType = "light" | "dark";

export default (props: { children: React.ReactChild }) => {
  const [theme, setTheme] = useState<themeType>("light");

  return (
    <div className={`layout ${theme}`}>
      <Header theme={theme} handleTheme={setTheme}></Header>
      <div className="wrapper">{props.children}</div>
      <Footer></Footer>
    </div>
  );
};
