import { useAppStore } from "@/shared/store";

export const useToastConfig = (loadingText: string, successText: string) => {
  const store = useAppStore();
  const { $toast } = useNuxtApp();

  const toastId = $toast.loading(loadingText, {
    theme: store.appTheme,
  });

  const toastUpdateSuccess = () => {
    $toast.update(toastId, {
      render: successText,
      type: "success",
      theme: store.appTheme,
      isLoading: false,
      autoClose: true,
      closeOnClick: true,
    });
  };

  const toastUpdateError = (error: Error) => {
    $toast.update(toastId, {
      autoClose: true,
      closeOnClick: true,
      render: () => {
        if (
          error.message ===
          "Firebase: The email address is already in use by another account. (auth/email-already-in-use)."
        ) {
          return "Пользователь с таким адресом электронной почты уже существует.";
        }
        return error.message;
      },
      type: "error",
      theme: store.appTheme,
      isLoading: false,
    });
  };

  return {
    toastUpdateError,
    toastUpdateSuccess,
  };
};
