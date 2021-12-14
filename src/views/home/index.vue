<template>
  <div class="home">
    <!-- 首页头部搜索栏模块 S -->
    <div class="header">
      <Suspense>
        <template #default>
          <AsyncHeader />
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </div>
    <!-- 首页头部搜索栏模块 E -->

    <!-- 轮播图模块 S -->
    <Banner :data="bannerList" class="banner" />
    <!-- 轮播图模块 E -->

    <!-- 列表模块 S -->
    <MenuList :data="menuList" />
    <!-- 列表模块 E -->

    <!-- 推荐歌曲模块  S -->
    <RecommendMusic
      :dynamic-music-list="dynamicMusicList"
      :fix-music-list="fixMusicList"
    />
    <!-- 推荐歌曲模块  E -->
  </div>
</template>

<script setup>
import { getBannerList, getMusicList } from "@/apis/index";
import { onMounted, defineAsyncComponent, ref, reactive } from "vue";
import { toReactive } from "@vueuse/core";
import Banner from "./components/Banner.vue";
import MenuList from "./components/MenuList.vue";
import RecommendMusic from "./components/RecommendMusci.vue";
// 数据定义部分 S
const AsyncHeader = defineAsyncComponent(() =>
  import("@/components/Header/index.vue")
);
// 轮播图列表
let bannerList = reactive([]);
// 菜单列表
let menuList = reactive([
  { name: "每日推荐", icon: "icon-retuijianyinqing", id: "001" },
  { name: "私人FM", icon: "icon-shouyinji1", id: "002" },
  { name: "歌单", icon: "icon-gedan", id: "003" },
  { name: "排行榜", icon: "icon-paihangbang", id: "004" },
  { name: "数字专辑", icon: "icon-zhuanji", id: "005" },
  { name: "专注冥想", icon: "icon-shuye", id: "006" },
  { name: "歌房", icon: "icon-luyin", id: "007" },
  { name: "游戏专区", icon: "icon-zhikeshuma-", id: "008" },
]);
// 不会变动的歌单列表
let fixMusicList = reactive([]);
//  当前歌单列表
let dynamicMusicList = reactive([]);

// 数据定义部分 E

// 生命周期部分 S
onMounted(() => {
  getBannerImgList();
  getRecommendMusicList();
});
// 生命周期部分 E

// 方法定义部分 S
/**
 * 获取轮播图列表
 */
async function getBannerImgList() {
  const { status, data } = await getBannerList();
  if (status === 200) {
    bannerList.length = 0;
    bannerList.push(...data.banners);
  }
}
/**
 * 获取推荐歌单
 */
async function getRecommendMusicList() {
  const { status, data } = await getMusicList();
  if (status === 200) {
    fixMusicList.length = 0;
    dynamicMusicList.length = 0;
    data.result.forEach((item, index) => {
      index < 5 ? fixMusicList.push(item) : dynamicMusicList.push(item);
    });
    console.log(dynamicMusicList);
    // fixMusicList =
  }
}
// 方法定义部分 E
</script>

<style lang="scss" scoped>
@keyframes move {
  80% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-170 / 750 * 100vw);
  }
}

.home {
  box-sizing: border-box;
  background-color: #f5f5f5;
  height: 100%;
  padding: 20 / 750 * 100vw;
}
</style>
