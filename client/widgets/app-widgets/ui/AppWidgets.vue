<script setup lang="ts">
import { TodoFilter } from "@/features/filter";
import { TodoSort } from "@/features/sort";
</script>

<template>
  <div class="app-widgets">
    <TodoFilter />
    <TodoSort />
  </div>
</template>

<style scoped>
.app-widgets {
  display: flex;
  gap: 16px;
  align-items: center;
}
</style>
