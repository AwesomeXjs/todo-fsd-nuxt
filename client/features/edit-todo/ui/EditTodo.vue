<script setup lang="ts">
  import { useTodoStore } from "@/entities/todo";
  import { useAppStore } from "@/shared/store/useAppStore";
  import { doc, updateDoc } from "@firebase/firestore";

  import { useEditUtils } from "../model/useEditUtils";

  const todoStore = useTodoStore();
  const appStore = useAppStore();

  const { t } = useI18n();

  const { editTodo, editValue } = useEditUtils();

  const successHandler = async () => {
    if (!editValue.value) {
      return;
    }
    await editTodo();
    todoStore.closeModalShow();
  };
</script>

<template>
  <MyModal @closeModal="todoStore.closeModalShow" :modal-show="todoStore.editModalShow">
    <MyForm
      :title="t('titleEditTodo')"
      :placeholder="t('placeholderEditTodo')"
      v-model:input-value="editValue"
      @cancel="todoStore.closeModalShow"
      @success="successHandler"
    />
  </MyModal>
</template>

<style scoped lang="scss"></style>
