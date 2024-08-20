<script setup lang="ts">
import { useAddTodo } from "../model/useAddTodo";
import { useAppStore } from "@/shared/store/useAppStore";
import MyForm from "@/shared/ui/components/MyForm.vue";

const appStore = useAppStore();

const { inputValue, addTodo } = useAddTodo();
const cancelHandler = () => {
  appStore.createTodoModalShow = false;
  inputValue.value = "";
};
</script>

<template>
  <MyModal :modal-show="appStore.createTodoModalShow">
    <MyForm
      :title="$t('titleNewTodo')"
      :placeholder="$t('placeholderNewTodo')"
      @cancel="cancelHandler"
      @success="addTodo"
      v-model:input-value="inputValue"
    />
  </MyModal>
</template>

<style scoped lang="scss"></style>
