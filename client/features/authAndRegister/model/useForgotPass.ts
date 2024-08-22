import { sendPasswordResetEmail } from "@firebase/auth";

import { useToastConfig } from "../../../shared/lib/composables/useToastConfig";

export const useForgotPass = (ForgotPassSchema: any, changeBackShow: () => void) => {
  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(ForgotPassSchema),
  });
  const auth = useFirebaseAuth();

  const submit = handleSubmit(async (value, ctx) => {
    const { toastUpdateSuccess, toastUpdateError } = useToastConfig(
      "Идет проверка...",
      "Письмо для восстановления пароля отправлено!"
    );
    try {
      await sendPasswordResetEmail(auth!, value.email, {
        url: "http://localhost:3000",
        handleCodeInApp: true,
      });
      changeBackShow();
      await navigateTo("/");
      toastUpdateSuccess();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toastUpdateError(error);
      }
    }
  });

  return {
    submit,
    isSubmitting,
  };
};
