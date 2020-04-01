import "./index.less";
import Header from "../Header";
import Footer from "../Footer";

export default (props: { children: React.ReactChild }) => {
  return (
    <div>
      <Header></Header>
      <div className="wrapper" style={{ paddingBottom: "16px" }}>
        {props.children}
      </div>
      <Footer></Footer>
    </div>
  );
};
