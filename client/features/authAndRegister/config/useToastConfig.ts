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
      render: error.message,
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
