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
    <ul class="list">
      <li class="list_item" v-for="item in menuList" :key="item.id">
        <div class="icon_wrapper">
          <i class="iconfont" :class="item.icon"></i>
        </div>
        <div class="menu_name">{{ item.name }}</div>
      </li>
    </ul>
    <!-- 列表模块 E -->

    <!-- 推荐歌曲模块  S -->
    <div class="recommend">
      <div class="recommend_header">
        <span class="recommend_musis_list">推荐歌曲</span>
        <span class="more">更多<i class="iconfont icon-youjiantou"></i></span>
      </div>

      <div class="content">
        <ul class="content_left">
          <li class="content_left_item">
            <img
              src="https://p1.music.126.net/c6Rddgfp3nKG-cPhyn4STg==/109951166485018774.jpg"
              alt=""
              class="left_item_img"
            />
            <span class="left_item_name"
              >应该很失落吧 明明相爱却无法在一起</span
            >
            <i class="iconfont icon-wuqiongda"></i>
          </li>
          <li class="content_left_item">
            <img
              src="https://p1.music.126.net/aNuKuCvW4cLlxAc_x3uYsw==/109951163974159231.jpg"
              alt=""
              class="left_item_img"
            />
            <span class="left_item_name"
              >应该很失落吧 明明相爱却无法在一起</span
            >
            <i class="iconfont icon-wuqiongda"></i>
          </li>
          <li class="content_left_item">
            <img
              src="https://p1.music.126.net/lHjRKW5bkXO4ZXy5ShoDFA==/109951165517309896.jpg"
              alt=""
              class="left_item_img"
            />
            <span class="left_item_name"
              >应该很失落吧 明明相爱却无法在一起</span
            >
            <i class="iconfont icon-wuqiongda"></i>
          </li>
        </ul>

        <!-- <ul class="content_right">
          <li class="content_right_item"></li>
        </ul> -->
      </div>
    </div>
    <!-- 推荐歌曲模块  E -->
  </div>
</template>

<script setup>
import { getBannerList, getMusicList } from "@/apis/index";
import { onMounted, defineAsyncComponent, ref, reactive } from "vue";
import { toReactive } from "@vueuse/core";
import Banner from "./components/Banner.vue";
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
    console.log(fixMusicList);
    console.log(dynamicMusicList);
    // fixMusicList =
  }
}
// 方法定义部分 E
</script>

<style lang="scss" scoped>
@keyframes move {
  0% {
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

  .swiper {
    height: 300 / 750 * 100vw;
  }
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

  .recommend {
    .recommend_header {
      display: flex;
      justify-content: space-between;
      .recommend_musis_list {
        font-size: 24 / 750 * 100vw;
        font-weight: 700;
      }
      .more {
        display: block;
        padding: 6 / 750 * 100vw 15 / 750 * 100vw;
        border: 1px solid #ccc;
        border-radius: 20 / 750 * 100vw;
      }
      .iconfont {
        margin-top: -8 / 750 * 100vw;
        font-size: 20 / 750 * 100vw;
      }
    }
    .content {
      .content_left {
        position: relative;
        height: 171 / 750 * 100vw;
        width: 120 / 750 * 100vw;
        overflow: hidden;
        .content_left_item {
          display: flex;
          flex-direction: column;
          margin: 3 / 750 * 100vw 0;
          // transform: translateY(-171 / 750 * 100vw);
          // animation: move 3s linear 1s infinite;
          .left_item_img {
            width: 100%;
            height: 120 / 750 * 100vw;
            border-radius: 20 / 750 * 100vw;
          }
          .left_item_name {
            margin-top: 4 / 750 * 100vw;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .iconfont {
            position: absolute;
            right: 0;
            top: 0;
            color: #fff;
            font-size: 30 / 750 * 100vw;
          }
        }
      }
    }
  }
  // 推荐歌单 E
}
</style>
