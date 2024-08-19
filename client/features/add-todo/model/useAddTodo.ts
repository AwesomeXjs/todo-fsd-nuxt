import { useTodoStore } from "@/entities/todo";
import { useAppStore } from "@/shared/store/useAppStore";

export const useAddTodo = () => {
  const todoStore = useTodoStore();
  const appStore = useAppStore();

  const inputValue = ref<string>();

  const addTodo = () => {
    if (inputValue.value) {
      todoStore.addTodo({
        id: Date.now(),
        title: inputValue.value,
        completed: false,
      });
      inputValue.value = "";
      appStore.createTodoModalShow = false;
    }
  };
  return { addTodo, inputValue };
};
