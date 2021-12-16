<template>
  <div class="wrapper">
    <div class="header">
      <div class="header_left">
        <i class="iconfont icon-touxiang"></i>
        <span class="user_name">who ur</span>
        <i class="iconfont icon-youjiantou"></i>
      </div>
      <i class="iconfont icon-iconfontscan"></i>
    </div>

    <div class="vip_wrapper">
      <div class="vip_header">
        <div class="header_left">
          <h3 class="left_title">开通黑胶VIP</h3>
          <div class="left_content">立享超21项专属特权&gt;</div>
        </div>

        <div class="header_right">会员中心</div>
      </div>

      <div class="share_wrapper">
        <span class="share_text"> 受邀专享，黑胶首月仅3.8元！ </span>
        <i class="iconfont"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 30 / 750 * 100vw;
  font-size: 26 / 750 * 100vw;
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 50 / 750 * 100vw;
    .header_left {
      flex: 1;
      display: flex;
      align-items: center;
      .user_name {
        margin: 0 5 / 750 * 100vw 0 20 / 750 * 100vw;
      }
    }
    .iconfont {
      font-size: 40 / 750 * 100vw;
    }
  }

  .vip_wrapper {
    padding: 20 / 750 * 100vw;
    height: 170 / 750 * 100vw;
    background-color: #353535;
    border-radius: 30 / 750 * 100vw;
    color: #888;
    .vip_header {
      display: flex;
      align-items: center;
      margin-bottom: 30 / 750 * 100vw;
      .header_left {
        flex: 1;
        .left_title {
          color: #d8d1cd;
          margin-bottom: 10 / 750 * 100vw;
        }
      }
      .header_right {
        padding: 10 / 750 * 100vw 20 / 750 * 100vw;
        border: 1px solid #ccc;
        border-radius: 50 / 750 * 100vw;
      }
    }

    .share_wrapper {
      padding-top: 30 / 750 * 100vw;
      border-top: 1px solid #ccc;
    }
  }
}
</style>