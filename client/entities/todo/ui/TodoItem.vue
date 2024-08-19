<script setup lang="ts">
import { EditIcon, Trash } from "@/shared/assets";
import type { ITodo } from "../model/types";
import { useTodoStore } from "../model/store";

const store = useTodoStore();

defineProps<{
  todo: ITodo;
}>();

const changeCompeteHandler = (id: number) => {
  store.checkTodo(id);
};
</script>

<template>
  <div class="todo-item">
    <div class="todo-content">
      <input
        @change="changeCompeteHandler(todo.id)"
        class="checkbox"
        :checked="todo.completed"
        type="checkbox"
      />
      <p :class="{ completeTodo: todo.completed }">{{ todo.title }}</p>
    </div>
    <div class="features">
      <EditIcon class="edit-icon" stroke="var(--accent-color)" />
      <Trash
        @click="store.deleteTodo(todo.id)"
        class="trash-icon"
        stroke="red"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.todo-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--accent-color-light);
  padding: 17px 0;
}
.todo-content {
  display: flex;
  font-weight: bold;
}

.completeTodo {
  text-decoration: line-through;
  color: var(--placeholder-color);
}
.checkbox {
  width: 25px;
  height: 25px;
  cursor: pointer;
  margin-right: 17px;
}
.edit-icon,
.trash-icon {
  cursor: pointer;
  transition: $transition;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.8);
  }
}
.features {
  display: flex;
  align-items: center;
}
</style>
