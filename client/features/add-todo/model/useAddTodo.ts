import { useTodoStore } from "@/entities/todo";
import { useAppStore } from "@/shared/store/useAppStore";
import { collection, doc, setDoc } from "firebase/firestore";
import { useFirestore } from "vuefire";
import type { ITodo } from "@/entities/todo";

export const useAddTodo = () => {
  const todoStore = useTodoStore();
  const appStore = useAppStore();
  const db = useFirestore();
  const collectionName = "todos";
  const auth = useFirebaseAuth();

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
        await setDoc(doc(db, `users/${user.uid}/todos`, payload.id), payload).then(() => {
          toastUpdateSuccess();
          todoStore.todos = [...todoStore.todos, payload];
          inputValue.value = "";
        });
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
