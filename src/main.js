import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/styles/init.scss";
import "./assets/styles/base.scss";
import "./assets/iconfont/iconfont.css";

createApp(App).use(router).mount("#app");
