import type { IAuthObj } from "./types";
import { useAppStore } from "@/shared/store";

export const authModalContentUtils = () => {
  const store = useAppStore();
  const { t } = useI18n();

  const authTitle = computed<IAuthObj>(() => {
    if (store.isAuth) {
      return {
        title: t("authTitleEnter"),
        btn: t("authBtnEnter"),
        question: t("authQuestionEnter"),
      };
    }
    return {
      title: t("authTitleSignUp"),
      btn: t("authBtnSignUp"),
      question: t("authQuestionSignUp"),
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
