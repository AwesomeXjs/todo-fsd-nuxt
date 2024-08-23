import { useTodoStore } from "@/entities/todo";

export const useEditUtils = () => {
  const todoStore = useTodoStore();
  const editValue = ref<string>("");
  const { COLLECTION_NAME } = useVariables();
  const { $apiService } = useNuxtApp();

  const editTodo = async () => {
    const user = await getCurrentUser();
    if (user.uid) {
      $apiService.updateItemInDb({
        COLLECTION_NAME,
        userId: user.uid,
        editValue: editValue.value,
        itemStore: todoStore,
      });
    }

    todoStore.selectedTodo = null;
    editValue.value = "";
  };

  return { editTodo, editValue };
};
