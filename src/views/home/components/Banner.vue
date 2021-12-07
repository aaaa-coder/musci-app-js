<template>
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
        src="../../../assets/images/home/building-6822998__480.jpg"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><img
        class="my_swiper_imgs"
        src="../../../assets/images/home/coffee-6487099__340.jpg"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><img
        class="my_swiper_imgs"
        src="../../../assets/images/home/rhinoceros-6799726__340.jpg"
        alt=""
    /></swiper-slide>
  </swiper>

  <div>{{ picData }}</div>
</template>

<script setup>
import {
  reactive,
  defineProps,
  watch,
  onMounted,
  watchEffect,
  createApp,
} from "vue";
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

const props = defineProps({
  picData: Array,
});
const app = createApp();
onMounted(() => {
  setTimeout(() => {
    console.log(props.picData);
  }, 2000);
  // console.log(picData);
});
// watchEffect(()=>{})
watch(
  () => props.picData,
  (newVal) => {
    console.log(app);
    console.log(newVal, "99999");
  },
  { deep: true, immediate: true }
);
let swiper_options = reactive({
  autoplay: {
    disableOnInteraction: true, // 鼠标滑动后继续自动播放
    delay: 30000, //4秒切换一次
  },
  speed: 500, //切换过渡速度
  // loop: true,
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
    // bulletActiveClass: "my-bullet-active",
  },
});
</script>

<style lang="scss" scoped>
// :deep(.swiper-pagination-bullet-active) {
//   color: #bf0b0b !important;
//   opacity: 1;
// }
// FIXED：无法修改pagination样式
:deep(.swiper-pagination-bullet-active) {
  // color: red;
  // opacity: 1;
  background: #bf0b0b !important;
  // background-color: red;
}
// .my-bullet-active {
//   color: #bf0b0b !important;
//   opacity: 1;
// }
</style>
