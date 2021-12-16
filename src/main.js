import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/styles/init.scss";
import "./assets/styles/base.scss";
import "./assets/iconfont/iconfont.css";
import store from "./store";
import { Popup } from "vant";
import { Overlay } from "vant";

createApp(App).use(router).use(Popup).use(Overlay).use(store).mount("#app");
