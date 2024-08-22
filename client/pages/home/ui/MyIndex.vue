<script setup lang="ts">
  import { AddTodo } from "@/features/add-todo";
  import { EditTodo } from "@/features/edit-todo";
  import { AppWidgets } from "@/widgets/app-widgets";
  import { TodoList } from "@/widgets/todo-list";

  const nuxtApp = useNuxtApp();

  useSeoMeta({
    title: "Home",
    ogTitle: "Home",
    description() {
      return "This is home page";
    },
    ogDescription() {
      return "This is home page";
    },
  });
</script>

<template>
  <AppWidgets />
  <TodoList />
  <AddTodo />
  <EditTodo />
</template>

<style scoped></style>
