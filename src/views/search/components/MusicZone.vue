<template>
  <div class="music_wrapper">
    <h4>音乐专区</h4>
    <div class="music_content">
      <div class="music_content_item">
        <div class="music_content_item_name">歌手分类</div>
        <div class="music_content_img_wrapper">
          <img
            :src="item.img1v1Url"
            alt=""
            v-for="item in props.singerData"
            :key="item.id"
            class="music_content_item_img"
          />
        </div>
      </div>
      <div class="music_content_item">
        <div class="music_content_item_name">歌手分类</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const props = defineProps({ singerData: Array });
const musicMenuList = reactive([
  {
    id: "01",
    name: "曲风分类",
    content: "查查你的专属曲风偏好",
    icon: "icon-icon--",
  },
  {
    id: "02",
    name: "乐谱典藏馆",
    content: "收录百万正版优质乐谱",
    icon: "icon-icon-test",
  },
  {
    id: "03",
    name: "影视原声专区",
    content: "听歌追剧好时光",
    icon: "icon-yingshi-yuanwenjian",
  },
  {
    id: "04",
    name: "电音专区",
    content: "全球热门电音嗨翻现场",
    icon: "icon-agora_-dianyin",
  },
  {
    id: "05",
    name: "Beat交易专区",
    content: "海量beats为创作助力",
    icon: "icon-beats",
  },
  {
    id: "06",
    name: "中文原创专区",
    content: "21省音乐电台助力原创音乐",
    icon: "icon-sanjiaoxing",
  },
  {
    id: "07",
    name: "说唱专区",
    content: "REAL说唱为你注入灵魂燃料",
    icon: "icon-rapper",
  },
  {
    id: "08",
    name: "摇滚专区",
    content: "国摇新声势力等你来听",
    icon: "icon-xianxingyaoguntubiao",
  },
  {
    id: "09",
    name: "古典专区",
    content: "精选典雅，优雅永不过时",
    icon: "icon-piano",
  },
  {
    id: "10",
    name: "ACG专区",
    content: "在音乐中追番打游戏",
    icon: "icon-wodezhuifan",
  },
  {
    id: "11",
    name: "DJ专区",
    content: "潮流网络热歌一网打尽",
    icon: "icon-DJ",
  },
  {
    id: "12",
    name: "亲子专区",
    content: "陪伴宝贝快乐成长",
    icon: "icon-baby",
  },
  {
    id: "13",
    name: "中国特色专区",
    content: "了解中国传统音乐文化",
    icon: "icon-pipa",
  },
  {
    id: "14",
    name: "经典专区",
    content: "英皇回归，回味粤语经典",
    icon: "icon-jiqiren-",
  },
]);
</script>

<style lang="scss" scoped>
.music_wrapper {
  margin-top: 30 / 750 * 100vw;
  .music_content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20 / 750 * 100vw;
    .music_content_item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20 / 750 * 100vw 0 30 / 750 * 100vw;
      flex: 1;
      height: 140 / 750 * 100vw;
      background-color: red;
      border-radius: 15 / 750 * 100vw;
      &:nth-child(2n + 1) {
        margin-right: 20 / 750 * 100vw;
      }
      .music_content_item_name {
        color: #fff;
        font-size: 24 / 750 * 100vw;
      }
      .music_content_img_wrapper {
        position: relative;
        .music_content_item_img {
          position: absolute;
          right: 0;
          top: -20 / 750 * 100vw;
          width: 40 / 750 * 100vw;
          height: 40 / 750 * 100vw;
          object-fit: cover;
          border-radius: 50%;
          &:first-child {
            right: 75 / 750 * 100vw;
            z-index: 3;
          }
          &:nth-child(2) {
            right: 50 / 750 * 100vw;
            z-index: 2;
          }
          &:last-child {
            right: 25 / 750 * 100vw;
            z-index: 1;
          }
        }
      }
    }
  }
}
</style>