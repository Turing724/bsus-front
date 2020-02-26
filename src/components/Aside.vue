<template>
  <aside>
    <div class="aside-inner"></div>
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
    filter: blur(2px);
  }
}
</style>
