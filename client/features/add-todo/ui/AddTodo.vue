<script setup lang="ts">
  import { useAppStore } from "@/shared/store";

  import { useAddTodo } from "../model/useAddTodo";

  const { t } = useI18n();
  const store = useAppStore();

  const { inputValue, addTodo } = useAddTodo();

  const { useSelectBackgroundShow } = useUtils();
  const { changeBackShow, isBackShow } = useSelectBackgroundShow();

  const cancelHandler = async () => {
    changeBackShow();
    inputValue.value = "";
  };

  const successHandler = () => {
    addTodo();
    inputValue.value = "";
    changeBackShow();
  };
</script>

<template>
  <MyModal @closeModal="changeBackShow" :modal-show="isBackShow">
    <MyForm
      :title="t('titleNewTodo')"
      :placeholder="t('placeholderNewTodo')"
      @cancel="cancelHandler"
      @success="successHandler"
      v-model:input-value="inputValue"
    />
  </MyModal>
  <button v-show="store.authUserId" @click="changeBackShow" class="add-todo-btn">+</button>
</template>

<style scoped lang="scss">
  .add-todo-btn {
    position: absolute;
    bottom: 24px;
    right: 35%;
    width: 48px;
    height: 48px;
    font-size: 50px;
    font-weight: 200;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--accent-color);
    border: 2px solid var(--accent-color);
    cursor: pointer;
    transition: 0.2s ease-out;
    &:hover {
      background-color: var(--accent-color-dark);
    }
    &:active {
      transform: scale(0.8);
    }
  }
</style>
