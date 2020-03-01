<template>
  <div id="ArticleItem">
    <div class="content">
      <p class="timetag">
        <span>{{ value.createdAt | showData }}&nbsp;</span>
        <span v-if="value.category">CATEGORY&nbsp;{{ value.category.name }}&nbsp;</span>
        <span v-if="value.tags">TAGS&nbsp;{{ value.tags }}&nbsp;</span>
      </p>
      <h2 class="title" @click="$router.push('/article/' + value.id)">{{ value.title }}</h2>
      <p class="desc">{{ value.description }}</p>
      <div class="btn" @click="$router.push('/article/' + value.id)">Continue Reading</div>
    </div>
    <div v-if="value.thumb" class="thumb" :style="`background-image: url(${value.thumb})`"></div>
  </div>
</template>

<script>
import dayjs from "dayjs";

export default {
  props: ["value"],
  filters: {
    showData(val) {
      return dayjs(val).format("YYYY-MM-DD");
    }
  }
};
</script>
<style lang="less" scoped>
#ArticleItem {
  word-break: break-all;
  display: flex;
  width: 100%;
  position: relative;
  margin-bottom: 40px;
  box-sizing: border-box;
  .content {
    flex: 1;
    padding: 0 15px 0 0;
    .timetag {
      color: #666;
      font-size: 12px;
      line-height: 24px;
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
      margin-top: 10px;
    }
    .btn {
      cursor: pointer;
      background-color: #222;
      color: #fff;
      line-height: 35px;
      margin-top: 25px;
      text-align: center;
      width: 120px;
      &:hover {
        background-color: rgba(34, 34, 34, 0.8);
        color: #fff;
      }
    }
  }
  .thumb {
    width: 35%;
    background-color: #eee;
    background-position: center;
    background-size: cover;
  }
}
</style>