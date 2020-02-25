<template>
  <div id="Header">
    <div class="container"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#Header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  z-index: 100;
}
.container {
  height: 60px;
  min-width: 1200px;
  max-width: 1440px;
  margin: 0 auto;
  background-color: green;
}
</style>
