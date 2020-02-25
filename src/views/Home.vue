<template>
  <div id="Home">
    <div class="container">
      <div class="main">
        <div class="banner"></div>
        <div class="articles">
          <ul class="articles-list">
            <li v-for="(it, i) in 6" :key="i" @click="$router.push('/article/1')">
              <div class="content">
                <span class="category">vue</span>
                <h2 class="title">asds萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达萨达是</h2>
                <p class="desc">
                  Building cross-platform mobile apps is trending these days, with the advent of frameworks that can build native apps without using swift…Building cross-platform
                  mobile apps is trending these days, with the advent of frameworks that can build native apps without using swift…
                </p>
                <span class="time">2019-20-12</span>
              </div>
              <div class="thumb"></div>
            </li>
          </ul>
        </div>
      </div>
      <div class="aside">
        <Aside></Aside>
      </div>
    </div>
    <!-- <div class="sidebar"></div> -->
  </div>
</template>

<script>
import Aside from "../components/Aside";
export default {
  name: "Home",
  components: {
    Aside
  }
};
</script>
<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  display: flex;
  .main {
    flex: 1;
    margin-right: 30px;
  }
  .aside {
    width: 280px;
  }
}

.sidebar {
  position: fixed;
}
.banner {
  width: 100%;
  height: 270px;
  background-color: red;
  border-radius: 6px;
  margin-bottom: 15px;
}
.articles {
  .articles-list {
    width: 100%;
    li {
      background-color: #fff;
      display: flex;
      width: 100%;
      position: relative;
      margin-bottom: 15px;
      box-sizing: border-box;
      .content {
        flex: 1;
        padding: 20px 5px 20px 15px;

        .category {
          font-size: 15px;
          color: rgba(0, 0, 0, 0.54);
          font-weight: 400;
        }
        .title {
          font-weight: 600;
        }
        .desc {
          color: rgba(0, 0, 0, 0.54);
          font-size: 15px;
          font-weight: 400;
          margin-top: 8px;
        }
        .time {
          margin-top: 12px;
          color: rgba(0, 0, 0, 0.54);
          font-size: 14px;
          display: block;
        }
      }
      .thumb {
        width: 150px;
        background-color: #eee;
      }
    }
  }
}
</style>
