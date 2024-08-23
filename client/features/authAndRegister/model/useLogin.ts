import { useTodoStore } from "@/entities/todo";
import { useAppStore } from "@/shared/store";
import { signInWithEmailAndPassword } from "@firebase/auth";

import { useToastConfig } from "../../../shared/lib/composables/useToastConfig";

export const useLogin = (LoginSchema: any, changeBackShow: () => void) => {
  const auth = useFirebaseAuth();
  const store = useAppStore();
  const todoStore = useTodoStore();
  const { $apiService } = useNuxtApp();
  const { COLLECTION_NAME } = useVariables();

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(LoginSchema),
  });

  const submitLogin = handleSubmit(async (value: any, ctx: any) => {
    const { toastUpdateSuccess, toastUpdateError } = useToastConfig(
      "Идет проверка...",
      "Авторизация прошла успешно!"
    );
    try {
      const { user } = await signInWithEmailAndPassword(auth!, value.email, value.password);
      store.authUserId = user.uid;
      toastUpdateSuccess();
      changeBackShow();
      $apiService.fetchTodosByData({
        COLLECTION_NAME,
        userId: user.uid,
        targetStore: todoStore,
        orderBy_: "createdAt",
        desc: true,
      });
      return await navigateTo("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toastUpdateError(error);
      }
    }
  });

  return { submitLogin, isSubmitting };
};
