<template>
  <div class="home">
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

    <div class="banner">
      <swiper
        :autoplay="swiper_options.autoplay"
        :loop="swiper_options.loop"
        :speed="swiper_options.speed"
        :pagination="swiper_options.pagination"
        :spaceBetween="swiper_options.spaceBetween"
        :coverflowEffect="swiper_options.coverflowEffect"
        :centeredSlides="swiper_options.centeredSlides"
        :slidesPerView="swiper_options.slidesPerView"
        class="swiper"
        effect="coverflow"
      >
        <swiper-slide
          ><img
            class="my_swiper_imgs"
            src="../../assets/images/home/building-6822998__480.jpg"
            alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            class="my_swiper_imgs"
            src="../../assets/images/home/coffee-6487099__340.jpg"
            alt=""
        /></swiper-slide>
        <swiper-slide
          ><img
            class="my_swiper_imgs"
            src="../../assets/images/home/rhinoceros-6799726__340.jpg"
            alt=""
        /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { getBannerList } from "@/apis/index";
import { onMounted, defineAsyncComponent, reactive } from "vue";
import SwiperCore, {
  Autoplay,
  Pagination,
  EffectCoverflow,
  Navigation,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/navigation/navigation.scss";
SwiperCore.use([Autoplay, Pagination, EffectCoverflow, Navigation]);

let swiper_options = reactive({
  autoplay: {
    disableOnInteraction: false, // 鼠标滑动后继续自动播放
    delay: 4000, //4秒切换一次
  },
  speed: 500, //切换过渡速度
  loop: true,
  slidesPerView: "auto", //解决最后一张切换到第一张中间的空白
  centeredSlides: true, //设置slide居中
  spaceBetween: 20,
  coverflowEffect: {
    // rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
    stretch: 50, //每个slide之间的拉伸值（距离），越大slide靠得越紧。 默认0。
    depth: 100, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
    modifier: 1, //depth和rotate和stretch的倍率，相当于            depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
    // slideShadows: false, //开启slide阴影。默认 true。
  },
  pagination: {
    clickable: true,
  },
});
const AsyncHeader = defineAsyncComponent(() =>
  import("../../components/Header/index.vue")
);
async function getBannerImgList() {
  const data = await getBannerList();
  console.log(data);
}
onMounted(() => {
  getBannerImgList();
});
</script>

<style lang="scss" scoped>
.home {
  box-sizing: border-box;
  background-color: #f5f5f5;
  height: 100%;
  padding: 20 / 750 * 100vw;

  .swiper {
    height: 300 / 750 * 100vw;
  }
}
</style>
