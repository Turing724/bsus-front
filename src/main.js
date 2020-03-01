import Vue from "vue";
import App from "./App";
import router from "./router";
import "./assets/style/reset.less";

import Axios from "./helpers/Axios";
Vue.prototype.$http = Axios;

import clickOutSide from "./components/clickOutSide";

Vue.directive("clickOutSide", clickOutSide);

Vue.config.productionTip = false;
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  created() {
    document.title = "BSUS | Baishiup's Blog";
  }
});
