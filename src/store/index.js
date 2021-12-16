import { createStore } from "vuex";
import global from "./modules/global";
import slider from "./modules/slider";

export default createStore({
  ...global,
  modules: {
    slider,
  },
});
