<script setup lang="ts">
import { useAppStore } from "@/shared/store/useAppStore";

const appStore = useAppStore();
</script>

<template>
  <button @click="appStore.createTodoModalShow = true" class="add-todo-btn">
    +
  </button>
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
  transition: $transition;
  &:hover {
    background-color: var(--accent-color-dark);
  }
  &:active {
    transform: scale(0.8);
  }
}
</style>
