<template>
  <div id="Home">
    <div class="container">
      <div class="banner"></div>
      <div class="articles">
        <ul class="articles-list">
          <li v-for="(it, i) in articleList" :key="i">
            <div class="content">
              <h2 class="title" @click="$router.push('/article/' + it.id)">{{ it.title }}</h2>
              <p class="desc">{{ it.description }}</p>
              <span class="time">{{ it.createdAt | showData }}</span>
              <div class="btn" @click="$router.push('/article/' + it.id)">Continue Reading</div>
            </div>
            <div class="thumb"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "../components/Aside";

import dayjs from "dayjs";

export default {
  name: "Home",
  components: {
    Aside
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
  .articles-list {
    width: 100%;
    li {
      word-break: break-all;
      display: flex;
      width: 100%;
      position: relative;
      margin-top: 40px;
      box-sizing: border-box;
      .content {
        flex: 1;
        padding: 0 15px 0 15px;
        .category {
          font-size: 15px;
          color: #666;
          font-weight: 400;
        }
        .title {
          font-weight: 600;
          font-size: 27px;
          cursor: pointer;
          &:hover {
            color: #888;
          }
        }
        .desc {
          color: #444;
          font-size: 15px;
          font-weight: 400;
          margin-top: 8px;
        }
        .time {
          margin-top: 12px;
          color: #666;
          font-size: 14px;
          display: block;
        }
        .btn {
          cursor: pointer;
          background-color: #222;
          color: #fff;
          line-height: 40px;
          margin-top: 40px;
          text-align: center;
          width: 150px;
          &:hover {
            background-color: rgba(34, 34, 34, 0.8);
            color: #fff;
          }
        }
      }
      .thumb {
        width: 300px;
        background-color: #eee;
      }
    }
  }
}
</style>
