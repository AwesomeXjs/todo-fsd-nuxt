import { useAppStore } from "@/shared/store";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { useToastConfig } from "../config/useToastConfig";

export const useGoogleAuth = (changeBackShow: () => void) => {
  const auth = useFirebaseAuth();
  const store = useAppStore();
  const googleAuthProvider = new GoogleAuthProvider();

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
      return await navigateTo("/dashboard", { replace: true });
    } catch (e: unknown) {
      if (e instanceof Error) {
        toastUpdateError(e);
      }
    }
  };

  return { loginWithGoogle };
};
