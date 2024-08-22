import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useToastConfig } from "../config/useToastConfig";

export const useGoogleAuth = (changeBackShow: () => void) => {
  const auth = useFirebaseAuth();
  const googleAuthProvider = new GoogleAuthProvider();

  const loginWithGoogle = async () => {
    const { toastUpdateSuccess, toastUpdateError } = useToastConfig(
      "Идет проверка...",
      "Вход прошел успешно!"
    );
    try {
      await signInWithPopup(auth!, googleAuthProvider);
      changeBackShow();
      toastUpdateSuccess();
      return await navigateTo("/dashboard", { replace: true });
    } catch (e: unknown) {
      if (e instanceof Error) {
        toastUpdateError(e);
      }
    }
  };

  return { loginWithGoogle };
};
