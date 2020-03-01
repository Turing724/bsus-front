<template>
  <div id="About">
    <div class="description">
      <p>
        <strong>洪远麒</strong>(Baishiup)是一名前端工程师，业余产品经理，项目经理。
      </p>
      <p>主导开发并上线pc网站，h5网站，小程序，小游戏和pc桌面应用，精通vue的生态。</p>
    </div>
    <div class="history">
      <h3 class="title">Experience</h3>
      <p>探睿科技，团队负责人</p>
      <p>番趣娱乐，前端TL</p>
      <h3 class="title">Contact</h3>
      <p>415453941@qq.com</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
#About {
  width: 90%;
  margin: 0 auto;
  padding-top: 50px;
  display: flex;
}
.description {
  font-size: 48px;
  color: #27363b;
  font-weight: 200;
  flex: 1;
}
.history {
  width: 150px;
  font-size: 14px;
  margin-left: 20px;
  .title {
    font-weight: 600;
  }
}
</style>