import { useTodoStore } from "@/entities/todo";
import { useAppStore } from "@/shared/store/useAppStore";

export const useEditUtils = () => {
  const todoStore = useTodoStore();
  const store = useAppStore();
  const editValue = ref<string>("");

  const editTodo = () => {
    const currentTodo = todoStore.todos.find((todo) => todo.id === todoStore.selectedTodo);
    if (currentTodo) {
      currentTodo.title = editValue.value;
    }
    todoStore.selectedTodo = null;
    store.editTodoModalShow = false;
    editValue.value = "";
  };

  return { editTodo, editValue };
};
