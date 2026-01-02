import { createRouter, createWebHistory } from "vue-router";
import DiaryListView from "@/views/DiaryListView.vue";
import DiaryCreateView from "@/views/DiaryCreateView.vue";
import DiaryEditView from "@/views/DiaryEditView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: DiaryListView },
    { path: "/new", component: DiaryCreateView },
    { path: "/edit/:id", component: DiaryEditView, props: true },
  ],
});

export default router;
