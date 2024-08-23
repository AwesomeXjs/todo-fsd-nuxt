import { useTodoStore } from "@/entities/todo";
import { useAppStore } from "@/shared/store";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const useGoogleAuth = (changeBackShow: () => void) => {
  const auth = useFirebaseAuth();
  const store = useAppStore();
  const todoStore = useTodoStore();
  const googleAuthProvider = new GoogleAuthProvider();
  const { $apiService } = useNuxtApp();
  const { COLLECTION_NAME } = useVariables();

  const loginWithGoogle = async () => {
    const { toastUpdateSuccess, toastUpdateError } = useToastConfig(
      "Идет проверка...",
      "Вход прошел успешно!"
    );
    try {
      const { user } = await signInWithPopup(auth!, googleAuthProvider);
      store.authUserId = user.uid;
      changeBackShow();
      toastUpdateSuccess();
      $apiService.fetchTodosByData({
        COLLECTION_NAME,
        userId: user.uid,
        targetStore: todoStore,
        orderBy_: "createdAt",
        desc: true,
      });
      return await navigateTo("/", { replace: true });
    } catch (e: unknown) {
      if (e instanceof Error) {
        toastUpdateError(e);
      }
    }
  };

  return { loginWithGoogle };
};
