<script setup lang="ts">
import { TodoFilter } from "@/features/filter";
import { TodoSort } from "@/features/sort";
import { ThemeChanger } from "@/features/theme-changer";
import { useTodoStore } from "@/entities/todo";
</script>

<template>
  <div class="app-widgets">
    <TodoFilter />
    <TodoSort />
    <ThemeChanger />
  </div>
</template>

<style scoped>
.app-widgets {
  display: flex;
  gap: 16px;
}
</style>
