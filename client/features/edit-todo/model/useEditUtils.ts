import { useTodoStore } from "@/entities/todo";
import { useAppStore } from "@/shared/store/useAppStore";
import { doc, updateDoc } from "@firebase/firestore";

export const useEditUtils = () => {
  const todoStore = useTodoStore();
  const store = useAppStore();
  const editValue = ref<string>("");
  const { COLLECTION_NAME } = useVariables();
  const db = useFirestore();

  const editTodo = async () => {
    const currentTodo = todoStore.todos.find((todo) => todo.id === todoStore.selectedTodo);
    const { toastUpdateSuccess, toastUpdateError } = useToastConfig("Редактирование", "Успешно");
    const docRef = doc(db, `users/${store.authUserId}/${COLLECTION_NAME}`, todoStore.selectedTodo!);
    if (currentTodo) {
      await updateDoc(docRef, {
        title: editValue.value,
      })
        .then(() => {
          toastUpdateSuccess();
          currentTodo.title = editValue.value;
        })
        .catch((e) => {
          if (e instanceof Error) {
            toastUpdateError(e);
          }
        });
    }
    todoStore.selectedTodo = null;
    editValue.value = "";
  };

  return { editTodo, editValue };
};
