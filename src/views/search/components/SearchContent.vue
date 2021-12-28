<template>
  <div class="content">
    <!-- <span></span> -->
    <div
      class="content_item"
      v-for="(item, index) in props.data"
      :key="item.id"
    >
      <span class="content_item_num" :class="{ rank_num: index < 3 }">{{
        index + 1
      }}</span>
      {{ item.first || item.searchWord }}
    </div>

    <div class="more_hot_rank" v-if="!showMoreHot" @click="handleGetMore">
      展开更多热搜
      <van-icon name="arrow-down" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits, watch } from "vue";

const showMoreHot = ref(false);

const emits = defineEmits(["onGetHotList"]);
const props = defineProps({ data: Array });

onMounted(() => {
  emits("onGetHotList", showMoreHot);
});

function handleGetMore() {
  showMoreHot.value = true;
  emits("onGetDetailList", showMoreHot);
}
</script>

<style lang="scss" scoped>
.content {
  box-sizing: border-box;
  padding: 30 / 750 * 100vw;
  margin-top: 10 / 750 * 100vw;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 8px 12px 0 rgb(0 0 0 / 10%);
  border-radius: 10 / 750 * 100vw;
  .content_item {
    width: 50%;
    margin-bottom: 20 / 750 * 100vw;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    .content_item_num {
      color: #888;
      font-size: 26 / 750 * 100vw;
      margin-right: 10 / 750 * 100vw;
    }
    .rank_num {
      color: #f24131;
    }
  }

  .more_hot_rank {
    width: 100%;
    color: #888;
    text-align: center;
  }
}
</style>