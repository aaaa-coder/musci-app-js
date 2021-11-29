<template></template>

<script setup>
import { onMounted } from "vue";
// import { getBannerList } from "../../apis/index";
import { getBannerList } from "@/apis/index";

async function getBannerImgList() {
  const data = await getBannerList();
  console.log(data);
}
onMounted(() => {
  getBannerImgList();
});
</script>
<style></style>
