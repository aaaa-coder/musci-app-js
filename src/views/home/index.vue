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

    <!-- 中间内容区 S -->
    <div class="content">
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

      <!-- 独家放送 S -->
      <FloorItem :data="exclusiveList" />
      <!-- 独家放送 E -->

      <!-- 流行歌单 S -->
      <FloorItem :data="fashionList" />
      <!-- 流行歌单 E -->

      <!-- 最新mv S -->
      <FloorItem :data="newMvList" />
      <!-- 最新mv E -->

      <!-- 推荐电台 S -->
      <FloorItem :data="radioList" />
      <!-- 推荐电台 E -->
    </div>
    <!-- 中间内容区 E -->

    <!-- 底部footer列表 S -->
    <footer class="footer">
      <ul class="footer_list">
        <li
          class="footer_list_item"
          v-for="(item, index) in footerList"
          :key="item.id"
          @click="handleTouch(index)"
          :class="{ active: index === footerIndex }"
        >
          <i class="iconfont" :class="item.icon"></i>
          <div>{{ item.name }}</div>
        </li>
      </ul>
    </footer>
    <!-- 底部footer列表 E -->

    <Slider />
  </div>
</template>

<script setup>
import {
  getBannerList,
  getMusicList,
  getExclusiveList,
  getFashionList,
  getNewMv,
  getRecommendRadio,
} from "@/apis/index";
import { onMounted, defineAsyncComponent, ref, reactive } from "vue";
import { toReactive } from "@vueuse/core";
import Banner from "./components/Banner.vue";
import MenuList from "./components/MenuList.vue";
import RecommendMusic from "./components/RecommendMusci.vue";
import FloorItem from "./components/FloorItem.vue";
import Slider from "./components/Slider.vue";
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
// footer功能列表
let footerList = reactive([
  { name: "发现", id: "001", icon: "icon-faxian" },
  { name: "播客", id: "002", icon: "icon-guangdie" },
  { name: "我的", id: "003", icon: "icon-wode" },
  { name: "关注", id: "004", icon: "icon-gedan" },
  { name: "云村", id: "005", icon: "icon-chongwutubiao23" },
]);
// 不会变动的歌单列表
let fixMusicList = reactive([]);
//  当前歌单列表
let dynamicMusicList = reactive([]);
// 独家放送列表
let exclusiveList = reactive({
  name: "",
  data: [],
});
// 流行歌单
let fashionList = reactive({
  name: "流行歌单",
  data: [],
});
// 最新mv
let newMvList = reactive({
  name: "最新mv",
  data: [],
});
// 推荐电台
let radioList = reactive({
  name: "推荐电台",
  data: [],
});
// footer菜单索引
let footerIndex = ref(0);
// 数据定义部分 E

// 生命周期部分 S
onMounted(() => {
  getBannerImgList();
  getRecommendMusicList();
  getExclusive();
  getFashionMusic();
  getNewMvList();
  getRecommendRadioList();
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
  }
}

/**
 * 获取独家放送列表
 */
async function getExclusive() {
  const { data } = await getExclusiveList();
  if (data.code === 200) {
    exclusiveList.name = data.name;
    exclusiveList.data.push(...data.result);
  }
}
/**
 * 获取流行歌单
 */
async function getFashionMusic() {
  const { data } = await getFashionList();
  if (data.code === 200) {
    fashionList.data.push(...data.playlists);
    fashionList.data.forEach((item) => (item.picUrl = item.coverImgUrl));
  }
}
/**
 * 获取最新mv
 */
async function getNewMvList() {
  const { data } = await getNewMv();
  if (data.code === 200) {
    newMvList.data.push(...data.data);
    newMvList.data.forEach((item) => {
      item.picUrl = item.cover;
    });
  }
}
/**
 * 获取推荐电台
 */
async function getRecommendRadioList() {
  const { data } = await getRecommendRadio();
  if (data.code === 200) {
    if (data.name) {
      radioList.name = data.name;
    }
    radioList.data.push(...data.programs);
    radioList.data.forEach((item) => {
      item.picUrl = item.blurCoverUrl;
    });
  }
}
// 底部菜单按下
function handleTouch(index) {
  footerIndex.value = index;
}
// 方法定义部分 E
</script>

<style lang="scss" scoped>
.home {
  box-sizing: border-box;
  background-color: #f5f5f5;
  height: 100%;
  padding: 20 / 750 * 100vw;
  .content {
    height: calc(100% - 100 / 750 * 100vw);
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 1px;
    }
    &::-webkit-scrollbar-thumb {
      background: transparent;
    }
  }
  .footer_list {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 20 / 750 * 100vw;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 80 / 750 * 100vw;
    border-radius: 0 0 30 / 750 * 100vw 30 / 750 * 100vw;
    .footer_list_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .iconfont {
        font-size: 40px;
      }
    }
    .active {
      color: #f24e49;
    }
  }
}
</style>
