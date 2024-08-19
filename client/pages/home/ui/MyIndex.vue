<script setup lang="ts">
import { AppWidgets } from "@/widgets/app-widgets";
import { TodoList } from "@/widgets/todo-list";
import { AddTodo } from "@/features/add-todo";
import { EditTodo } from "@/features/edit-todo";

const nuxtApp = useNuxtApp();

// example composables
const { sayExample } = useExample();
sayExample();

onMounted(() => {
  // example plugins
  nuxtApp.$sayHello();
});
</script>

<template>
  <AppWidgets />
  <TodoList />
  <AddTodoButton />
  <AddTodo />
  <EditTodo />
</template>

<style scoped></style>
