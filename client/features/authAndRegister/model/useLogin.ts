import { useAppStore } from "@/shared/store";
import { signInWithEmailAndPassword } from "@firebase/auth";

import { useToastConfig } from "../config/useToastConfig";

export const useLogin = (LoginSchema: any, changeBackShow: () => void) => {
  const auth = useFirebaseAuth();
  const store = useAppStore();

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(LoginSchema),
  });

  const submitLogin = handleSubmit(async (value: any, ctx: any) => {
    const { toastUpdateSuccess, toastUpdateError } = useToastConfig(
      "Идет проверка...",
      "Авторизация прошла успешно!"
    );
    try {
      await signInWithEmailAndPassword(auth!, value.email, value.password);
      toastUpdateSuccess();
      changeBackShow();
      return await navigateTo("/dashboard");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toastUpdateError(error);
      }
    }
  });

  return { submitLogin, isSubmitting };
};
