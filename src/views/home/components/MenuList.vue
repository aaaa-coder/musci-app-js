<template>
  <ul class="list">
    <li class="list_item" v-for="item in props.data" :key="item.id">
      <div class="icon_wrapper">
        <i class="iconfont" :class="item.icon"></i>
      </div>
      <div class="menu_name">{{ item.name }}</div>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({ data: Array });
</script>

<style lang="scss" scoped>
// 菜单列表 S
.list {
  display: flex;
  align-items: center;
  height: 90 / 750 * 100vw;
  overflow-x: auto;
  margin-top: 20 / 750 * 100vw;
  padding: 10 / 750 * 100vw 0;
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
  .list_item {
    margin: 0 20 / 750 * 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon_wrapper {
      width: 60 / 750 * 100vw;
      height: 60 / 750 * 100vw;
      line-height: 60 / 750 * 100vw;
      text-align: center;
      background-color: #fde1df;
      border-radius: 50%;
      margin-bottom: 4px;
      .iconfont {
        font-size: 40 / 750 * 100vw;
        color: #f24e49;
      }
    }
    .menu_name {
      width: 80 / 750 * 100vw;
      text-align: center;
    }
  }
}
// 菜单列表 E
</style>