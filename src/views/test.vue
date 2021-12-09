<template></template>

<script setup>
import { reactive, toRef } from "vue";
let a = reactive([]);
let b = reactive([]);
a.push(4);
a.push(5);
b = reactive(a.splice(0, 1));
console.log(b);
// a = b.map()
</script>

<style></style>
