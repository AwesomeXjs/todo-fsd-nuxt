import type { IAuthObj } from "./types";
import { useAppStore } from "@/shared/store";

export const authModalContentUtils = () => {
  const store = useAppStore();

  const authTitle = computed<IAuthObj>(() => {
    if (store.isAuth) {
      return {
        title: "Вход",
        btn: "Войти",
        question: "Нет аккаунта?",
      };
    }
    return {
      title: "Регистрация",
      btn: "Зарегестрировать",
      question: "У вас уже есть аккаунт?",
    };
  });

  const toggleAuth = () => {
    store.isAuth = !store.isAuth;
  };
  return {
    authTitle,
    toggleAuth,
  };
};
