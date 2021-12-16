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
    </div>
  </div>
</template>

<script setup>
import mitt from "mitt";
const emitter = mitt();
import { onMounted, onBeforeUnmount } from "vue";

onMounted(() => {
  emitter.on("handleTouch", (data) => {
    console.log(data);
  });
});
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
    height: 200 / 750 * 100vw;
    background-color: #353535;
    border-radius: 30 / 750 * 100vw;
    .vip_header {
      display: flex;
      .header_left {
        flex: 1;
        .left_title {
          color: #d8d1cd;
        }
      }
    }
  }
}
</style>