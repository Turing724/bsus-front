<template>
  <aside>
    <div class="hot">
      <div class="head">热门文章</div>
      <ul>
        <li v-for="(it, i) in 5" :key="i">
          <div class="rank">0{{ i + 1 }}</div>
          <div class="content">
            <h2 class="title">After Attending a Trump Rally, I Realized Democrats Are Not Ready For 2020</h2>
            <div class="time">2020-10-23</div>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
aside {
  width: 100%;
  .hot {
    background-color: #fff;
    padding: 15px;
    box-sizing: border-box;
    .head {
      font-size: 22px;
      color: rgba(0, 0, 0, 0.84);
      border-bottom: 1px solid rgba(0, 0, 0, 0.15);
      padding-bottom: 16px;
      margin: 0 0 16px;
    }
    ul li {
      display: flex;
      margin-bottom: 20px;
      .rank {
        width: 30px;
        font-weight: 400;
        font-size: 25px;
        color: rgba(0, 0, 0, 0.15);
        margin-right: 12px;
      }
      .content {
        .title {
          font-size: 14px;
          font-weight: 400;
        }
        .time {
          color: rgba(0, 0, 0, 0.54);
          font-size: 13px;
          margin-top: 5px;
        }
      }
    }
  }
}
</style>
