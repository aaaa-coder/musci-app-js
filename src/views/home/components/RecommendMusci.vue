<template>
  <div class="recommend">
    <div class="recommend_header">
      <span class="recommend_musis_list">推荐歌曲</span>
      <span class="more">更多<i class="iconfont icon-youjiantou"></i></span>
    </div>

    <div class="content">
      <i class="iconfont icon-wuqiongda"></i>
      <ul class="content_left" id="left_list">
        <li
          class="content_left_item"
          v-for="item in props.dynamicMusicList"
          :key="item.id"
        >
          <img :src="item.picUrl" alt="" class="left_item_img" />
          <span class="left_item_name common_name">{{ item.name }}</span>
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
  // bannerList.push(bannerList[0]);
  autoplay();
});

function autoplay() {
  let list = document.getElementById("left_list");

  setTimeout(() => {
    // 克隆第一张图
    let cloneFirstImg = list.firstElementChild.cloneNode(true);
    // 将第一张图片添加至图片列表的末尾
    list.appendChild(cloneFirstImg);

    let index = 0;
    let lock = true;

    function handleRightBtn() {
      if (!lock) return;
      index++;
      list.style.transform = `translateY(${index * -30.5 + "vw"})`;
      // 为什么要加过渡? 因为切换到了最后一张假图时会将过渡去掉
      list.style.transition = "0.5s ease";

      if (index === 3) {
        index = 0;
        setTimeout(() => {
          list.style.transform = `translateY("0px")`;
          // 取消过渡 500毫秒之后切换第一张
          list.style.transition = "none";
        }, 1000);
      }

      // 关锁
      lock = false;
      setTimeout(() => {
        lock = true;
      }, 500);
    }
    let autoplay = setInterval(handleRightBtn, 2000);
    // 轮播图借用
    // 作者：云牧
    // 链接：https://juejin.cn/post/7032161243431763976
    // 来源：稀土掘金
    // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
  }, 500);
}
</script>

<style lang="scss" scoped>
.recommend {
  .recommend_header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10 / 750 * 100vw;
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
    position: relative;
    display: flex;
    height: 235 / 750 * 100vw;
    overflow-x: auto;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      width: 1px;
    }
    &::-webkit-scrollbar-thumb {
      background: transparent;
    }
    .iconfont {
      position: absolute;
      top: 0;
      left: 120 / 750 * 100vw;
      color: #fff;
      font-size: 40 / 750 * 100vw;
      z-index: 999;
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
      width: 160 / 750 * 100vw;
      height: 100%;
      flex-shrink: 0;
      .content_left_item {
        margin-bottom: 10 / 750 * 100vw;
        height: 100%;
        .left_item_img {
          width: 100%;
          border-radius: 10 / 750 * 100vw;
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