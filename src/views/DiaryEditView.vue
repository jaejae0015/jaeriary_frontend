<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getDiary, updateDiary } from "@/api/diary.api";
import DiaryForm from "@/components/DiaryForm.vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const id = Number(route.params.id);
const diary = ref({ title: "", content: "" });

onMounted(async () => {
  const data = await getDiary(id);
  diary.value = {
    title: data.title,
    content: data.content,
  };
});

const submit = async (value: { title: string; content: string }) => {
  await updateDiary(id, value);
  router.push("/");
};
</script>

<template>
  <DiaryForm :modelValue="diary" @submit="submit" />
</template>