<template>
  <div id="Category">
    <p class="categorys" v-for="(it,i) in dataSource" :key="i" :style="`color:${colorArr[i]}`">
      <span
        class="name"
        :style="`font-size:${randomFontsizea()}px`"
        @click="handleList(it)"
      >{{it.name}}</span>
      <span class="num">{{it.articles.length}}</span>
    </p>
  </div>
</template>

<script>
import gradientColor from "../helpers/gradientColor";
export default {
  data() {
    return {
      dataSource: [],
      colorArr: []
    };
  },
  computed: {},

  created() {
    this.getData();
  },
  methods: {
    randomFontsizea() {
      return 48 + Math.floor(Math.random() * 40);
    },
    async getData() {
      let res = await this.$http.get("/category");
      this.colorArr = gradientColor("#006fff", "#4fddb0", res.result.data.length);
      this.dataSource = res.result.data;
    },
    handleList(it) {
      if (it.articles.length) {
        this.$router.push(`/articlelist/${it.id}`);
      }
    }
  }
};
</script>
<style lang="less" scoped>
#Category {
  width: 90%;
  margin: 0 auto;
  padding-top: 50px;
}
.categorys {
  display: inline-block;
  margin-right: 30px;
  font-size: 48px;
  font-family: "SeviloNova", serif;
  cursor: pointer;
  transition: all 0.5s ease;
  font-size: 0;
  .name {
    transition: all 0.5s ease;
  }
  &:hover {
    .name {
      color: #27363b;
    }
  }
  .num {
    font-size: 30px;
  }
}
</style>