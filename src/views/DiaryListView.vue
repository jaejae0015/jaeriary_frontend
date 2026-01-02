<template>
  <div class="page">
    <h1>Jaeriary</h1>

    <router-link to="/new" class="btn primary">
      새 일기
    </router-link>

    <div v-if="diaries.length === 0" class="empty">
      아직 작성된 일기가 없습니다
    </div>

    <div v-for="d in diaries" :key="d.id" class="card">
      <h3>{{ d.title }}</h3>
      <p>{{ d.content }}</p>

      <div class="actions">
        <router-link :to="`/edit/${d.id}`" class="btn">
          수정
        </router-link>
        <button class="btn danger" @click="remove(d.id)">
          삭제
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getDiaries, deleteDiary, type Diary } from "@/api/diary.api";

const diaries = ref<Diary[]>([]);

const load = async () => {
  diaries.value = await getDiaries();
};

const remove = async (id: number) => {
  if (!confirm("삭제할까요?")) return;
  await deleteDiary(id);
  await load();
};

onMounted(load);
</script>
