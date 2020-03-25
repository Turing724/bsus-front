import Layout from "../components/Layout";
import "../styles/font.less";
import "../styles/reset.less";
import "../styles/common.less";

export default ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps}></Component>
    </Layout>
  );
};
