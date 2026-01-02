<template>
  <div class="page">
    <h1>새 일기</h1>
    <DiaryForm submitLabel="저장" @submit="create" />
  </div>
</template>

<script setup lang="ts">
import DiaryForm from "@/components/DiaryForm.vue";
import { createDiary } from "@/api/diary.api";
import { useRouter } from "vue-router";

const router = useRouter();

const create = async (data: { title: string; content: string }) => {
  await createDiary(data);
  router.push("/");
};
</script>
