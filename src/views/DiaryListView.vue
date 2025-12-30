<template>
  <div>
    <button @click="goNew">새 일기</button>

    <ul v-if="diaries.length">
      <li v-for="d in diaries" :key="d.id">
        {{ d.title }}
      </li>
    </ul>

    <p v-else>
      아직 작성된 일기가 없습니다
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getDiaries, type Diary } from "@/api/diary.api";

const router = useRouter();
const diaries = ref<Diary[]>([]);

const load = async () => {
  const res = await getDiaries();
  console.log("API 응답:", res); // 배열
  diaries.value = res;           // ⭐ res.data ❌
};

const goNew = () => {
  router.push("/new");
};

onMounted(load);
</script>
