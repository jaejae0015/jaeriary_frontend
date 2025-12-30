<script setup lang="ts">
import { onMounted } from "vue";
import { healthCheck } from "@/api/health.api";

onMounted(async () => {
  console.log("🔥 HomeView mounted");

  const res = await healthCheck();
  console.log("API RESULT:", res.data);
});
</script>

<template>
  <h2>Home</h2>
  <p>Vue + Spring Boot</p>
</template>