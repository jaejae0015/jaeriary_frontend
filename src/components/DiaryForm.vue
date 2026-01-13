<template>
  <form class="card" @submit.prevent="submit">
    <input v-model="form.title" placeholder="제목" required />
    <textarea v-model="form.content" placeholder="내용" rows="5" required />
    <button class="primary">
      {{ submitLabel }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";

const props = defineProps<{
  modelValue?: {
    title: string;
    content: string;
  };
  submitLabel: string;
}>();

const emit = defineEmits<{
  (e: "submit", value: { title: string; content: string }): void;
}>();

const form = reactive({
  title: "",
  content: "",
});

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      form.title = val.title;
      form.content = val.content;
    }
  },
  { immediate: true }
);

const submit = () => {
  emit("submit", {
    title: form.title,
    content: form.content,
  });
};
</script>
