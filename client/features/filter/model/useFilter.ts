import { useTodoStore } from "@/entities/todo";
import type { ITodo } from "@/entities/todo";

export const useFilter = () => {
  const todoStore = useTodoStore();

  const searchTodos = computed(() => {
    return todoStore.todos.filter((post: ITodo) =>
      post.title.toLowerCase().includes(todoStore.inputValue.toLowerCase())
    );
  });

  return { searchTodos };
};
