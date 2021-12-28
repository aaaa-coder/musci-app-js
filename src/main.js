import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/styles/init.scss";
import "./assets/styles/base.scss";
import "./assets/iconfont/iconfont.css";
import store from "./store";
import vant from "./vant";
// import { Button } from "vant";

createApp(App).use(router).use(vant).use(store).mount("#app");
