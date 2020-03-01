<template>
  <div id="Article">
    <div class="container">
      <h2 class="title">{{ dataSource.title }}</h2>
      <div class="content markdown-body" v-html="dataSource.content"></div>
      <!-- TODO -->
      <div class="comment"></div>
    </div>
  </div>
</template>

<script>
import "github-markdown-css";
import "highlight.js/styles/github.css";

export default {
  name: "Article",
  data() {
    return {
      dataSource: {}
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let res = await this.$http(`/article/${this.$route.params.id}`);
      this.dataSource = Object.assign({}, res.result.data);
      document.title = `${this.dataSource.title} | Baishiup's Blog`;
    }
  }
};
</script>
<style lang="less" scoped>
#Article {
  width: 92%;
  margin: 0 auto;
}
.title {
  font-size: 26px;
  margin: 30px 0 25px;
  width: 100%;
}

.content {
  padding: 10px 0;
}
.comment {
  height: 200px;
}
</style>
