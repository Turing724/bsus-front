<template>
  <div id="Footer">
    <div class="container"></div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="less" scoped>
#Footer {
  width: 100%;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  z-index: 100;
  .container {
    width: 100%;
    // height: 60px;
    background-color: #fff;
  }
}
</style>
