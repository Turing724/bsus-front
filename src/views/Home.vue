<template>
  <div id="Home">
    <div class="container">
      <div class="banner"></div>
      <div class="articles">
        <ArticleItem v-for="(it, i) in articleList" :key="i" v-model="articleList[i]"></ArticleItem>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "../components/Aside";

import dayjs from "dayjs";
import ArticleItem from "../components/ArticleItem";

export default {
  name: "Home",
  components: {
    Aside,
    ArticleItem
  },
  filters: {
    showData(val) {
      return dayjs(val).format("YYYY-MM-DD");
    }
  },
  data() {
    return {
      articleList: [],
      page: 1,
      pageSize: 15
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      await this.getArticle();
    },
    async getArticle(index = 1) {
      this.page = index;
      let res = await this.$http(`/article?page=${this.page}&pageSize=${this.pageSize}`);
      this.articleList = res.result.data;
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  margin-bottom: 100px;
}
.articles {
  width: 92%;
  margin: 0 auto;
  padding-top: 30px;
}
</style>
