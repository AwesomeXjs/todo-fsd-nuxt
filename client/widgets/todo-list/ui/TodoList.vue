<script setup lang="ts">
import { TodoItem } from "@/entities/todo";
import { useFilter } from "@/features/filter";
import { useSortUtils } from "@/features/sort";

const { searchTodos } = useFilter();
const { sortedAndFilteredTodos } = useSortUtils(searchTodos);

console.log();
</script>

<template>
  <div class="empty-wrapper" v-if="sortedAndFilteredTodos?.length === 0">
    <div class="empty_todo_list">
      <img src="/detective.svg" alt="" />
      <h3>Empty...</h3>
    </div>
  </div>
  <div class="todo-list">
    <TransitionGroup name="todos">
      <TodoItem
        v-for="item in sortedAndFilteredTodos"
        :key="item.id"
        :todo="item"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.todo-list {
  max-width: 520px;
  margin: 0 auto;
  padding-top: 30px;
}

.todos-enter-active,
.todos-leave-active {
  transition: all 0.5s ease;
}
.todos-enter-from,
.todos-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.todos-move, /* apply transition to moving elements */
.todos-enter-active,
.todos-leave-active {
  transition: all 0.5s ease;
}

.todos-enter-from,
.todos-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.empty_todo_list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.empty-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
}
</style>
