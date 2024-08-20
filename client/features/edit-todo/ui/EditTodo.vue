<script setup lang="ts">
import { useEditUtils } from "../model/useEditUtils";
import { useAppStore } from "@/shared/store/useAppStore";

const store = useAppStore();

const { editTodo, editValue } = useEditUtils();
</script>

<template>
  <MyModal :modal-show="store.editTodoModalShow">
    <MyForm
      :title="$t('titleEditTodo')"
      :placeholder="$t('placeholderEditTodo')"
      v-model:input-value="editValue"
      @cancel="store.editTodoModalShow = false"
      @success="editTodo"
    />
  </MyModal>
</template>

<style scoped lang="scss"></style>
