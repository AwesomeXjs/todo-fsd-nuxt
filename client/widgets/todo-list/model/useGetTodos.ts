import { useTodoStore } from "@/entities/todo";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import type { ITodo } from "@/entities/todo";

export const useGetTodos = () => {
  const isLoading = ref<boolean>(false);
  const db = useFirestore();
  const { $toast } = useNuxtApp();
  const todoStore = useTodoStore();
  const { COLLECTION_NAME } = useVariables();

  const getAllTodos = async <T extends ITodo>(user: any): Promise<T[] | undefined> => {
    try {
      isLoading.value = true;
      const q = query(collection(db, `users/${user.uid}/${COLLECTION_NAME}`), orderBy("title"));
      const listDocs = await getDocs(q);
      return listDocs.docs.map((doc) => doc.data() as T);
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (!user) {
          $toast.error("Авторизуйтесь!");
          return;
        }
        $toast.error(error.message);
      }
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(async () => {
    const user = await getCurrentUser();
    const data = await getAllTodos<ITodo>(user);
    if (data) {
      todoStore.todos = [...data];
    }
  });

  return { isLoading };
};
