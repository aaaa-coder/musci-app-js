import { createRouter, createWebHashHistory } from "vue-router";
const routeList = ["search"];
const path = (data) => {
  return data.map((item) => {
    return {
      name: item,
      path: `/${item}`,
      component: () => import(`../views/${item}/index.vue`),
    };
  });
};
const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      name: "home",
      path: "/",
      component: () => import("../views/home/index.vue"),
    },
    ...path(routeList),
  ],
});
export default router;
