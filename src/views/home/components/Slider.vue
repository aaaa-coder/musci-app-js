<template>9999</template>

<script setup>
import mitt from "mitt";
const emitter = mitt();
import { onMounted, onBeforeUnmount } from "vue";

onMounted(() => {
  emitter.on("handleTouch", (data) => {
    console.log(data);
  });
});
</script>

<style>
</style>