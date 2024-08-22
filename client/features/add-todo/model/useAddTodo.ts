import { useTodoStore } from "@/entities/todo";
import { doc, setDoc } from "firebase/firestore";
import { useFirestore } from "vuefire";
import type { ITodo } from "@/entities/todo";

export const useAddTodo = () => {
  const todoStore = useTodoStore();
  const db = useFirestore();
  const { COLLECTION_NAME } = useVariables();

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
    const { toastUpdateSuccess, toastUpdateError } = useToastConfig(
      "Идет добавление...",
      "Задача добавлена!"
    );
    try {
      if (user) {
        await setDoc(doc(db, `users/${user.uid}/${COLLECTION_NAME}`, payload.id), payload).then(
          () => {
            toastUpdateSuccess();
            todoStore.todos = [...todoStore.todos, payload];
            inputValue.value = "";
          }
        );
      }
    } catch (e) {
      if (e instanceof Error) {
        toastUpdateError(e);
      }
    }

    // }
  };
  return { addTodo, inputValue };
};
