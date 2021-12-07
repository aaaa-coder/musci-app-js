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
      <Banner :pic-data="bannerList" />
    </div>
  </div>
</template>

<script setup>
import { getBannerList } from "@/apis/index";
import { onMounted, defineAsyncComponent, reactive } from "vue";
import Banner from "./components/Banner.vue";
const AsyncHeader = defineAsyncComponent(() =>
  import("@/components/Header/index.vue")
);
let bannerList = reactive([123]);
async function getBannerImgList() {
  const { status, data } = await getBannerList();
  if (status === 200) {
    bannerList = JSON.parse(JSON.stringify(data.banners));
    console.log(bannerList);
  }
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
