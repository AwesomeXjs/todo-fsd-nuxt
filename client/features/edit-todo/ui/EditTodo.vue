<script setup lang="ts">
import { useEditUtils } from "../model/useEditUtils";
import { useTodoStore } from "@/entities/todo";

const todoStore = useTodoStore();

const { editTodo, editValue } = useEditUtils();

const successHandler = () => {
  todoStore.closeModalShow();
  editTodo();
};
</script>

<template>
  <MyModal
    @closeModal="todoStore.closeModalShow"
    :modal-show="todoStore.editModalShow"
  >
    <MyForm
      :title="$t('titleEditTodo')"
      :placeholder="$t('placeholderEditTodo')"
      v-model:input-value="editValue"
      @cancel="todoStore.closeModalShow"
      @success="successHandler"
    />
  </MyModal>
</template>

<style scoped lang="scss"></style>
