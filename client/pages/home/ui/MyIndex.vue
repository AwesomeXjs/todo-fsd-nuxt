<script setup lang="ts">
import { AppWidgets } from "@/widgets/app-widgets";
import { TodoList } from "@/widgets/todo-list";

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
</template>

<style scoped></style>
