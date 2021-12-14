<template>
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
          <span class="left_item_name common_name"
            >应该很失落吧 明明相爱却无法在一起</span
          >
          <i class="iconfont icon-wuqiongda"></i>
        </li>
        <li class="content_left_item">
          <img
            src="https://p1.music.126.net/3Xy-JzODrTcbP9v_8rmWmQ==/109951166695442219.jpg"
            alt=""
            class="left_item_img"
          />
          <span class="left_item_name common_name"
            >应该很失落吧 明明相爱却无法在一起</span
          >
          <i class="iconfont icon-wuqiongda"></i>
        </li>
        <li class="content_left_item">
          <img
            src="https://p1.music.126.net/UnOO7hTEti9ux3N0_OaGeg==/109951166079367925.jpg"
            alt=""
            class="left_item_img"
          />
          <span class="left_item_name common_name"
            >应该很失落吧 明明相爱却无法在一起</span
          >
          <i class="iconfont icon-wuqiongda"></i>
        </li>
        <li class="content_left_item">
          <img
            src="https://p1.music.126.net/c6Rddgfp3nKG-cPhyn4STg==/109951166485018774.jpg"
            alt=""
            class="left_item_img"
          />
          <span class="left_item_name common_name"
            >应该很失落吧 明明相爱却无法在一起</span
          >
          <i class="iconfont icon-wuqiongda"></i>
        </li>
      </ul>

      <ul class="content_right">
        <li
          class="content_right_item"
          v-for="item in fixMusicList"
          :key="item.id"
        >
          <img :src="item.picUrl" alt="" class="right_img" />
          <span class="common_name">{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
const props = defineProps({ dynamicMusicList: Array, fixMusicList: Array });
let bannerList = reactive(props.dynamicMusicList);
onMounted(() => {
  // bannerList.push(props.dynamicMusicList[0]);
  console.log(bannerList);
});

function autoplay() {}
</script>

<style lang="scss" scoped>
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
    display: flex;
    height: 240 / 750 * 100vw;
    overflow-x: auto;
    &::-webkit-scrollbar {
      width: 1px;
    }
    &::-webkit-scrollbar-thumb {
      background: transparent;
    }
    .common_name {
      padding: 3 / 750 * 100vw;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .content_left {
      position: relative;
      overflow: hidden;
      width: 160 / 750 * 100vw;
      height: 100%;
      flex-shrink: 0;
      .content_left_item {
        height: 100%;
        .left_item_img {
          width: 100%;
          border-radius: 10 / 750 * 100vw;
        }
        .iconfont {
          position: absolute;
          top: 0;
          right: 5 / 750 * 100vw;
          color: #fff;
          font-size: 40 / 750 * 100vw;
        }
      }
    }
    .content_right {
      display: flex;
      margin-left: 10 / 750 * 100vw;
      .content_right_item {
        margin: 0 5 / 750 * 100vw;
        width: 160 / 750 * 100vw;
        .right_img {
          width: 100%;
          border-radius: 10 / 750 * 100vw;
        }
      }
    }
  }
}
</style>