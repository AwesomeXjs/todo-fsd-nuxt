import { useTodoStore } from "@/entities/todo";
import type { ITodo } from "@/entities/todo";

export const useAddTodo = () => {
  const todoStore = useTodoStore();

  const { COLLECTION_NAME } = useVariables();
  const { $apiService } = useNuxtApp();

  const { generateUUID } = useUniqueId();
  const inputValue = ref<string>("");

  const addTodo = async (): Promise<void> => {
    if (!inputValue.value) {
      return;
    }

    const payload: ITodo = {
      id: generateUUID(),
      title: inputValue.value,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    const user = await getCurrentUser();
    if (user.uid) {
      $apiService.addItemToDb({
        COLLECTION_NAME,
        userId: user.uid,
        inputValue: inputValue,
        targetStore: todoStore,
        payload,
      });
    }
  };
  return { addTodo, inputValue };
};
