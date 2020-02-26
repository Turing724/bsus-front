<template>
  <div id="app">
    <Aside class="aside"></Aside>
    <div class="main">
      <Header class="header"></Header>
      <router-view class="main-inner" />
      <Footer class="footer"></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Aside
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.aside {
  width: 40%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(34, 34, 34, 0.6);
}
.main {
  width: 60%;
  margin-left: 40%;
  padding-top: 60px;
}
.header {
  width: 60%;
  margin-left: 40%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  border-bottom: 1px solid #f5f5f5;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 100;
}
</style>
