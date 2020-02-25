<template>
  <div id="Article">
    <div class="container">
      <div class="main">123</div>
      <div class="aside">
        <Aside></Aside>
      </div>
    </div>
  </div>
</template>

<script>
import Aside from "../components/Aside";
export default {
  name: "Article",
  components: { Aside }
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
    background-color: #fff;
  }
  .aside {
    width: 280px;
  }
}
</style>
