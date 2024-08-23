import { useTodoStore } from "@/entities/todo";
import { useAppStore } from "@/shared/store";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";

export const useRegisterUtils = (RegisterSchema: any, changeBackShow: () => void) => {
  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(RegisterSchema),
  });

  //get auth instance
  const auth = useFirebaseAuth();
  const store = useAppStore();

  const submitRegister = handleSubmit(async (value, ctx) => {
    const { toastUpdateSuccess, toastUpdateError } = useToastConfig(
      "Идет проверка...",
      "Регистрация прошла успешно!"
    );
    try {
      const { user } = await createUserWithEmailAndPassword(auth!, value.email, value.password);
      store.authUserId = user.uid;
      await updateProfile(user, {
        displayName: value.name,
      });
      toastUpdateSuccess();
      changeBackShow();
      return await navigateTo("/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toastUpdateError(error);
      }
    } finally {
    }
  });

  return {
    submitRegister,
    isSubmitting,
  };
};
