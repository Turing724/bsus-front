<template>
  <div id="ArticleList">
    <div class="desc">查询分类：{{category_name}}</div>
    <ArticleItem v-for="(it, i) in dataSource" :key="i" v-model="dataSource[i]"></ArticleItem>
  </div>
</template>

<script>
import ArticleItem from "../components/ArticleItem";
export default {
  components: {
    ArticleItem
  },
  data() {
    return {
      dataSource: [],
      category_name: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let res = await this.$http.get("/article", { params: { category_id: this.$route.query.categoryId } });
      this.dataSource = res.result.data;
      this.category_name = res.result.data[0].category.name;
    }
  }
};
</script>
<style lang="less" scoped>
#ArticleList {
  width: 92%;
  margin: 0 auto;
}
.desc {
  padding: 20px 0;
  font-size: 20px;
}
</style>