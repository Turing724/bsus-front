<template>
  <div id="Header">
    <div class="container">
      <div class="logo">
        <img src="/static/img/logo.png" alt @click="toHome" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      if (this.$route.name !== "Home") {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="less" scoped>
#Header {
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 100;
}
.container {
  width: 92%;
  margin: 0 auto;
  height: 100%;
}
.logo {
  height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  img {
    height: 100%;
    float: left;
    cursor: pointer;
  }
}
</style>
