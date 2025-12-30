<template>
  <div>
    <h2>새 일기</h2>

    <!-- ⭐️ 핵심 -->
    <DiaryForm
      submitLabel="저장"
      @submit="handleCreate"
    />
  </div>
</template>

<script setup lang="ts">
import DiaryForm from "@/components/DiaryForm.vue";
import { createDiary } from "@/api/diary.api";

const handleCreate = async (data: { title: string; content: string }) => {
  console.log("부모에서 submit 받음:", data); // 디버깅용

  await createDiary(data); // ✅ 실제 DB 저장
};
</script>
