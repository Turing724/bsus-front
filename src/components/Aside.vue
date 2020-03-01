<template>
  <aside>
    <div class="aside-inner">
      <div class="nav">
        <ul>
          <router-link tag="li" to="/">首页</router-link>
          <router-link tag="li" to="/category">分类</router-link>
          <router-link tag="li" to="/project">项目</router-link>
          <router-link tag="li" to="/about">关于我</router-link>
        </ul>
      </div>

      <div class="foot">
        <h2>Baishiup's Blog</h2>
        <p class="slogan">大脑不该用来记忆，而是观察、思考、创造和影响</p>
        <div class="follow"></div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  methods: {}
};
</script>
<style lang="less" scoped>
aside {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .aside-inner {
    width: 100%;
    height: 100%;
    background-image: url("../../static/img/aside_bg.png");
    background-size: 400px auto;
    position: relative;
    border: 1px solid transparent;
  }
  .foot {
    left: 50px;
    position: absolute;
    bottom: 45px;
    color: #fff;
    h2 {
      font-size: 50px;
    }
    .slogan {
      font-size: 16px;
    }
  }
}
.nav {
  width: 370px;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 30px 40px;
  box-sizing: border-box;
  position: absolute;
  right: 50px;
  top: 50px;
  li {
    color: #fff;
    padding: 11px 0;
    font-size: 15px;
    cursor: pointer;
    & + li {
      border-top: 1px solid #282828;
    }
    &.router-link-exact-active,
    &:hover {
      color: #a6a6a6;
    }
  }
}
</style>
