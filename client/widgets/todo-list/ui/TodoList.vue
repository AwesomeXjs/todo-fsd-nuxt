<script setup lang="ts">
import { TodoItem } from "@/entities/todo";
import { useTodoStore } from "@/entities/todo";

const store = useTodoStore();
</script>

<template>
  <div class="todo-list">
    <TodoItem v-for="item in store.todos" :key="item.id" :todo="item" />
  </div>
</template>

<style scoped>
.todo-list {
  max-width: 520px;
  margin: 0 auto;
  padding-top: 30px;
}
</style>
