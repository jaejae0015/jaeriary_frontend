<template>
  <div>
    <h2>{{ editing ? "일기 수정" : "새 일기" }}</h2>

    <form @submit.prevent="submit">
      <input v-model="title" placeholder="제목" required />
      <textarea v-model="content" placeholder="내용" required />
      <button type="submit">{{ editing ? "수정" : "저장" }}</button>
    </form>

    <hr />

    <div v-if="diaries.length === 0">아직 일기가 없습니다</div>

    <div v-for="d in diaries" :key="d.id">
      <h4>{{ d.title }}</h4>
      <p>{{ d.content }}</p>
      <button @click="edit(d)">수정</button>
      <button @click="remove(d.id)">삭제</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getDiaries, createDiary, updateDiary, deleteDiary, type Diary } from "@/api/diary.api";

const diaries = ref<Diary[]>([]);
const editing = ref<Diary | null>(null);

const title = ref("");
const content = ref("");

const load = async () => {
  diaries.value = await getDiaries();
};

onMounted(load);

const submit = async () => {
  if (editing.value) {
    await updateDiary(editing.value.id, { title: title.value, content: content.value });
    editing.value = null;
  } else {
    await createDiary({ title: title.value, content: content.value });
  }

  title.value = "";
  content.value = "";
  await load();
};

const edit = (d: Diary) => {
  editing.value = d;
  title.value = d.title;
  content.value = d.content;
};

const remove = async (id: number) => {
  if (!confirm("삭제할까요?")) return;
  await deleteDiary(id);
  await load();
};
</script>
