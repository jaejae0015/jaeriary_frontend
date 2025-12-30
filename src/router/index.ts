import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/HomeView.vue") },
  { path: "/login", component: () => import("@/views/LoginView.vue") },
  { path: "/:pathMatch(.*)*", component: () => import("@/views/NotFound.vue") }
];

export default createRouter({
  history: createWebHistory(),
  routes
});