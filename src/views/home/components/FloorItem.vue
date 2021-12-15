<template>
  <div class="wrapper">
    <div class="header">
      <span class="header_name" v-if="props.data.name">{{
        props.data.name
      }}</span>
      <span class="more">更多<i class="iconfont icon-youjiantou"></i></span>
    </div>

    <ul class="list">
      <li class="list_item" v-for="item in props.data.data" :key="item.id">
        <img :src="item.picUrl" class="item_img" />
        <span class="item_name omit2">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
const props = defineProps({ data: Object });
onMounted(() => {
  setTimeout(() => {}, 500);
});
</script>

<style lang="scss" scoped>
.wrapper {
  margin-bottom: 20 / 750 * 100vw;
}
.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5 / 750 * 100vw;
  .header_name {
    font-weight: 700;
    font-size: 24px;
  }
  .more {
    display: block;
    padding: 6 / 750 * 100vw 15 / 750 * 100vw;
    border: 1px solid #ccc;
    border-radius: 20 / 750 * 100vw;
  }
  .iconfont {
    margin-top: -8 / 750 * 100vw;
  }
}

.list {
  display: flex;
  height: 220 / 750 * 100vw;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
  .list_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10 / 750 * 100vw;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    height: 100%;
    .item_img {
      margin-bottom: 5 / 750 * 100vw;
      width: 223 / 750 * 100vw;
      height: 150 / 750 * 100vw;
      border-radius: 10 / 750 * 100vw;
      object-fit: cover;
    }
  }
}
</style>