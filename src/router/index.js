import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("../views/home/index.vue"),
    },
    {
      name: "test",
      path: "/test",
      component: () => import("../views/test.vue"),
    },
  ],
});

export default router;
