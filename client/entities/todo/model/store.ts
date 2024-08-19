import { defineStore } from "pinia";
import type { ITodo } from "./types";

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<ITodo[]>([
    { id: 1, title: "Vlados", completed: true },
    { id: 2, title: "Dimas", completed: false },
    { id: 3, title: "Gena", completed: true },
  ]);

  const checkTodo = (id: number) => {
    const todo = todos.value.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  };

  const deleteTodo = (id: number) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  return { todos, checkTodo, deleteTodo };
});
