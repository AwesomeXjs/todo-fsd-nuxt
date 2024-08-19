<script setup lang="ts">
import { TodoItem } from "@/entities/todo";
import { useFilter } from "@/features/filter";
import { useSortUtils } from "@/features/sort";

const { searchTodos } = useFilter();
const { sortedAndFilteredTodos } = useSortUtils(searchTodos);

console.log();
</script>

<template>
  <div class="todo-list">
    <TodoItem
      v-for="item in sortedAndFilteredTodos"
      :key="item.id"
      :todo="item"
    />
  </div>
</template>

<style scoped>
.todo-list {
  max-width: 520px;
  margin: 0 auto;
  padding-top: 30px;
}
</style>
