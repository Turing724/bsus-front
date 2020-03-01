import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.vue")
    },
    {
      path: "/article/:id",
      name: "article",
      component: () => import("../views/Article.vue")
    },
    {
      path: "/category",
      name: "category",
      component: () => import("../views/Category.vue")
    },
    {
      path: "/about",
      component: () => import("../views/About.vue")
    },
    {
      path: "/articlelist/:categoryId",
      component: () => import("../views/ArticleList.vue")
    }
  ]
});
