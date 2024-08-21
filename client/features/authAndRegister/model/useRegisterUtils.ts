import { createUserWithEmailAndPassword } from "@firebase/auth";

import { useToastConfig } from "../config/useToastConfig";

export const useRegisterUtils = () => {
  const email = ref<string>("");
  const password = ref<string>("");
  const isLoading = ref<boolean>(false);

  //get auth instance
  const auth = useFirebaseAuth();

  const sighUp = async (): Promise<void> => {
    const { toastUpdateSuccess, toastUpdateError } = useToastConfig(
      "Идет проверка...",
      "Регистрация прошла успешно!"
    );
    try {
      isLoading.value = true;
      const { user } = await createUserWithEmailAndPassword(auth!, email.value, password.value);
      toastUpdateSuccess();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toastUpdateError(error);
      }
    } finally {
      isLoading.value = false;
    }
  };

  return {
    email,
    password,
    isLoading,
    sighUp,
  };
};
