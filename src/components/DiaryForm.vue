<template>
  <!-- ⭐️ submit.prevent : 새로고침 방지 핵심 -->
  <form class="diary-form" @submit.prevent="onSubmit">
    <div>
      <input
        v-model="title"
        type="text"
        placeholder="제목을 입력하세요"
        required
      />
    </div>

    <div>
      <textarea
        v-model="content"
        placeholder="내용을 입력하세요"
        rows="5"
        required
      />
    </div>

    <button type="submit">
      {{ submitLabel }}
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

/**
 * ✅ props
 * - editData: 수정 시 기존 일기 데이터
 * - submitLabel: 버튼 텍스트 (작성 / 수정)
 */
const props = defineProps<{
  editData?: {
    title: string;
    content: string;
  };
  submitLabel?: string;
}>();

/**
 * ✅ emit
 * 부모에게 "submit" 이벤트만 전달
 */
const emit = defineEmits<{
  (e: "submit", data: { title: string; content: string }): void;
}>();

/**
 * ✅ form state
 */
const title = ref("");
const content = ref("");

/**
 * ✅ 수정 모드일 경우 값 주입
 */
watch(
  () => props.editData,
  (val) => {
    if (val) {
      title.value = val.title;
      content.value = val.content;
    }
  },
  { immediate: true }
);

/**
 * ✅ submit handler
 * - API 호출 ❌
 * - emit만 함
 */
const onSubmit = () => {
  emit("submit", {
    title: title.value,
    content: content.value,
  });

  // 작성 후 초기화 (create 모드일 때)
  if (!props.editData) {
    title.value = "";
    content.value = "";
  }
};

const submitLabel = props.submitLabel ?? "저장";
</script>

<style scoped>
.diary-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 400px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
}

button {
  padding: 8px;
  cursor: pointer;
}
</style>
