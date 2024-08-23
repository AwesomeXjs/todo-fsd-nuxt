import { useAppStore } from "@/shared/store";
import { deleteDoc, updateDoc } from "@firebase/firestore";
import { collection, doc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import type {
  fetchTodosByData,
  IApiService,
  ICreateItem,
  IDeleteItem,
  IUpdateItem,
} from "../types/apiService";

interface ITodo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

class ApiService implements IApiService {
  db;

  constructor(db: any) {
    this.db = db;
  }

  async fetchTodosByData({
    COLLECTION_NAME,
    userId,
    targetStore,
    orderBy_,
    desc = false,
  }: fetchTodosByData): Promise<void> {
    try {
      const q = query(
        collection(this.db, `users/${userId}/${COLLECTION_NAME}`),
        orderBy(orderBy_, desc ? "desc" : "asc")
      );
      const listDocs = await getDocs(q);
      targetStore.todos = listDocs.docs.map((doc) => doc.data() as ITodo);
    } catch (e) {
      console.log(e);
    }
  }
  async addItemToDb({
    COLLECTION_NAME,
    payload,
    inputValue,
    targetStore,
    userId,
  }: ICreateItem): Promise<void> {
    const { toastUpdateSuccess, toastUpdateError } = useToastConfig(
      "Идет добавление...",
      "Задача добавлена!"
    );
    try {
      if (userId) {
        await setDoc(doc(this.db, `users/${userId}/${COLLECTION_NAME}`, payload.id), payload).then(
          () => {
            toastUpdateSuccess();
            targetStore.todos = [...targetStore.todos, payload];
            inputValue.value = "";
          }
        );
      }
    } catch (e) {
      if (e instanceof Error) {
        toastUpdateError(e);
      }
    }
  }
  async deleteItemFromDb({ COLLECTION_NAME, id, itemStore }: IDeleteItem): Promise<void> {
    const appStore = useAppStore();
    const { toastUpdateSuccess, toastUpdateError } = useToastConfig("Удаление", "Успешно");
    await deleteDoc(doc(this.db, `users/${appStore.authUserId}/${COLLECTION_NAME}`, id))
      .then(() => {
        toastUpdateSuccess();
      })
      .catch((error: unknown) => {
        if (error instanceof Error) {
          toastUpdateError(error);
        }
      });
    itemStore.deleteTodo(id);
  }

  async updateItemInDb({
    COLLECTION_NAME,
    userId,
    editValue,
    itemStore,
  }: IUpdateItem): Promise<void> {
    const currentTodo = itemStore.todos.find((todo: ITodo) => todo.id === itemStore.selectedTodo);
    const { toastUpdateSuccess, toastUpdateError } = useToastConfig("Редактирование", "Успешно");
    const docRef = doc(this.db, `users/${userId}/${COLLECTION_NAME}`, itemStore.selectedTodo!);
    if (currentTodo) {
      await updateDoc(docRef, {
        title: editValue,
      })
        .then(() => {
          toastUpdateSuccess();
          currentTodo.title = editValue;
        })
        .catch((e) => {
          if (e instanceof Error) {
            toastUpdateError(e);
          }
        });
    }
  }
}

export default ApiService;
