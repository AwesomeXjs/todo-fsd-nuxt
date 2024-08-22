import { defineStore } from "pinia";
import type { ITodo } from "./types";

export const useTodoStore = defineStore("todo", () => {
  const todos = ref<ITodo[]>([]);
  const sortValue = ref<string>("sortChoiceAll");
  const inputValue = ref("");
  const selectedTodo = ref<string | null>(null);
  const editModalShow = ref<boolean>(false);

  const checkTodo = (id: string) => {
    const todo = todos.value.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  };

  const deleteTodo = (id: string) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  const addTodo = (todo: ITodo) => {
    todos.value.push(todo);
  };

  const closeModalShow = () => {
    editModalShow.value = false;
  };

  return {
    todos,
    checkTodo,
    deleteTodo,
    addTodo,
    inputValue,
    sortValue,
    selectedTodo,
    editModalShow,
    closeModalShow,
  };
});
