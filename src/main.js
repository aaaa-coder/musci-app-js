import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/styles/init.scss";
import "./assets/styles/base.scss";
import "./assets/iconfont/iconfont.css";
import store from "./store";
import { Button } from "vant";

createApp(App).use(router).use(Button).use(store).mount("#app");
