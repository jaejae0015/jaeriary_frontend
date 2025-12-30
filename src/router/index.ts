import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/DiaryListView.vue"),
    },
    {
  path: "/new",
  component: () => import("@/views/DiaryCreateView.vue"),
}
  ],
});

export default router;
