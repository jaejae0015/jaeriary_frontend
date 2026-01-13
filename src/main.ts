import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import "@/styles/reset.css";
import "@/styles/variables.css";
import "@/styles/layout.css";
import "@/styles/base.css";
import "@/styles/main.css";

createApp(App).use(router).mount("#app");
