<template>
  <div class="header_wrapper">
    <i class="base_btn iconfont icon-caidan"></i>
    <div class="header_right">
      <input type="text" class="search_btn" placeholder="请输入搜索内容" />
      <i class="iconfont icon-luyin"></i>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.header_wrapper {
  display: flex;
  align-items: center;
  height: 50 / 750 * 100vw;
  .header_right {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    &::before {
      font-family: "iconfont";
      position: absolute;
      content: "\e651";
      left: 60 / 750 * 100vw;
      font-size: 22 / 750 * 100vw;
    }
    .search_btn {
      box-sizing: border-box;
      flex: 1;
      height: 50 / 750 * 100vw;
      margin: 0 40 / 750 * 100vw;
      padding: 0 20 / 750 * 100vw 0 50 / 750 * 100vw;
      background-color: #fff;
      border: none;
      outline: none;
      border-radius: 30 / 750 * 100vw;
    }
  }
}

.iconfont {
  font-size: 40 / 750 * 100vw;
}
</style>
