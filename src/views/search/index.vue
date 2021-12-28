<template>
  <div class="search_wrapper">
    <div class="header">
      <Suspense>
        <template #default>
          <AsyncHeader page="search" />
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </div>

    <div class="search_list" @click="handleClickRank($event)">
      <span
        class="search_list_item"
        id="rank0"
        :class="{ active_item: searchIndex === 0 }"
        >热搜榜</span
      >
      <span
        class="search_list_item"
        id="rank1"
        :class="{ active_item: searchIndex === 1 }"
        >视频榜</span
      >
      <span
        class="search_list_item"
        id="rank2"
        :class="{ active_item: searchIndex === 2 }"
        >博客榜</span
      >
    </div>

    <SearchContent
      :data="searchListData"
      @onGetHotList="getHotStatus"
      @onGetDetailList="handleGetDetailList"
    />

    <MusicZone :singer-data="singerTypeList" />
  </div>
</template>

<script setup>
import {
  defineAsyncComponent,
  ref,
  onMounted,
  reactive,
  watch,
  toRef,
} from "vue";
import {
  getHotSearchList,
  getDetailHotSearchList,
  getSingerTypeList,
} from "@/apis/search";

import SearchContent from "./components/SearchContent.vue";
import MusicZone from "./components/MusicZone.vue";
const AsyncHeader = defineAsyncComponent(() =>
  import("@/components/Header/index.vue")
);
const searchIndex = ref(0);
const searchListData = reactive([]);
const isMoreStatus = ref(false);
const singerTypeList = reactive([]);

watch(
  () => searchIndex.value,
  (newVal) => {
    getRankList(newVal);
  }
);

onMounted(() => {
  getHotList();
  getSingerList();
});
// 判断是否点击过获取更多
function getHotStatus(data) {
  isMoreStatus.value = data.value;
}
// 不同的排行榜获取不同的数据
function getRankList(data) {
  switch (data) {
    case 0:
      getHotList();
      break;
    default:
      searchListData.length = 0;
      break;
  }
}
/**
 * 点击展开更多热搜
 */
function handleGetDetailList(data) {
  isMoreStatus.value = data.value;
  getRankList(searchIndex.value);
}
/**
 * 获取热搜列表
 */
async function getHotList() {
  const { data } = await (isMoreStatus.value
    ? getDetailHotSearchList()
    : getHotSearchList());
  if (data.code === 200) {
    searchListData.length = 0;
    isMoreStatus.value
      ? searchListData.push(...data.data)
      : searchListData.push(...data.result.hots);
  }
}

/**
 * 点击不同的榜单
 */
function handleClickRank(e) {
  if (e.target && e.target.tagName === "SPAN") {
    searchIndex.value = Number(e.target.id[e.target.id.length - 1]);
  }
}
/**
 * 获取歌手分类
 */
async function getSingerList() {
  const { data } = await getSingerTypeList();
  if (data.code === 200) {
    singerTypeList.push(...data.artists);
  }
}
</script>

<style lang="scss" scoped>
.search_wrapper {
  margin-bottom: 60 / 750 * 100vw;
  padding: 10 / 750 * 100vw;
  .search_list {
    margin-top: 20 / 750 * 100vw;
    .search_list_item {
      font-size: 22 / 750 * 100vw;
      color: #888;
      &:nth-child(2) {
        margin: 0 40 / 750 * 100vw;
      }
    }
    .active_item {
      color: #333;
      font-weight: 700;
    }
  }
}
</style>