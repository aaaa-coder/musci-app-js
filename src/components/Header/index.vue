<template>
  <div class="header_wrapper">
    <i
      class="base_btn iconfont"
      :class="showIcon() && showIcon().leftIcon"
      @click="handleSetting"
    ></i>
    <div v-if="showIcon() && showIcon().page === 'home'" class="header_right">
      <input
        type="text"
        class="search_btn"
        placeholder="请输入搜索内容"
        @click="handleSearch"
      />
      <i class="iconfont" :class="showIcon() && showIcon().rightIcon"></i>
    </div>
    <input
      v-if="showIcon() && showIcon().page === 'search'"
      type="text"
      class="search_input"
      placeholder="评论区过万的热门歌曲"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();
const props = defineProps({ page: String });
const iconArr = reactive([
  { page: "home", leftIcon: "icon-caidan", rightIcon: "icon-luyin" },
  { page: "search", leftIcon: "icon-zuojiantou", rightIcon: "" },
]);

function showIcon() {
  return iconArr.filter((item) => props.page === item.page)[0];
}
function handleSetting() {
  props.page === "home"
    ? store.dispatch("slider/handleTouch", true)
    : router.push({ name: "home" });
}
function handleSearch() {
  router.push({ name: "search" });
}
</script>

<style lang="scss" scoped>
.header_wrapper {
  display: flex;
  align-items: center;
  height: 50 / 750 * 100vw;
  .header_right {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    &::before {
      font-family: "iconfont";
      position: absolute;
      content: "\e651";
      left: 60 / 750 * 100vw;
      font-size: 22 / 750 * 100vw;
    }
    .search_btn {
      box-sizing: border-box;
      flex: 1;
      height: 50 / 750 * 100vw;
      margin: 0 40 / 750 * 100vw;
      padding: 0 20 / 750 * 100vw 0 50 / 750 * 100vw;
      background-color: #fff;
      border: none;
      outline: none;
      border-radius: 30 / 750 * 100vw;
    }
  }

  .search_input {
    flex: 1;
    margin-left: 20 / 750 * 100vw;
    border: none;
    height: 40 / 750 * 100vw;
    font-size: 24 / 750 * 100vw;
    color: #888;
    border-bottom: 1px solid #000;
  }
}

.iconfont {
  font-size: 40 / 750 * 100vw;
}
</style>
