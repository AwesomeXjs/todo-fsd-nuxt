<script setup>
import { AppWidgets } from "@/widgets/app-widgets";
import { TodoList } from "@/widgets/todo-list";
import { AddTodo } from "@/features/add-todo";
import { EditTodo } from "@/features/edit-todo";
import { getCurrentUser } from "vuefire";

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

// example composables
const { sayExample } = useUtils();
sayExample();

const user = await getCurrentUser();
onMounted(() => {
  // example plugins
  nuxtApp.$sayHello();
  nuxtApp.$toast("Hello from Nuxt 3", {
    type: "success",
  });
});

console.log(user);
</script>

<template>
  <AppWidgets />
  <TodoList />
  <AddTodo />
  <EditTodo />
</template>

<style scoped></style>
