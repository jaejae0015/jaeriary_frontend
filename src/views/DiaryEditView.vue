<template>
  <div class="container">
    <h2>일기 수정</h2>

    <form @submit.prevent="submit">
      <input v-model="title" placeholder="제목" required />

      <textarea v-model="content" placeholder="내용" rows="6" required />

      <div class="actions">
        <button type="submit">수정</button>
        <button type="button" @click="cancel">취소</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getDiary, updateDiary } from "@/api/diary.api";

const route = useRoute();
const router = useRouter();

const id = Number(route.params.id);

/** 🔹 화면에 바인딩될 상태 */
const title = ref("");
const content = ref("");

/** 🔹 단건 조회 후 값 주입 */
onMounted(async () => {
  const diary = await getDiary(id);
  title.value = diary.title;
  content.value = diary.content;
});

/** 🔹 수정 */
const submit = async () => {
  await updateDiary(id, {
    title: title.value,
    content: content.value,
  });
  router.push("/");
};

const cancel = () => {
  router.push("/");
};
</script>
