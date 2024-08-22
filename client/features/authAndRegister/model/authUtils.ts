import { useAppStore } from "@/shared/store";
import type { IAuthObj } from "./types";

export const authModalContentUtils = () => {
  const store = useAppStore();
  const { t } = useI18n();

  const authTitle = computed<IAuthObj>(() => {
    if (store.isAuth && !store.isForgotPassword) {
      return {
        title: t("authTitleEnter"),
        btn: t("authBtnEnter"),
        question: t("authQuestionEnter"),
      };
    }
    if (!store.isAuth && !store.isForgotPassword) {
      return {
        title: t("signInButton"),
        btn: t("authBtnSignUp"),
        question: t("authQuestionSignUp"),
      };
    } else {
      return {
        title: t("forgotPassTitle"),
        btn: t("forgotPassBtn"),
        question: t("forgotPassText"),
      };
    }
  });

  const toggleAuth = () => {
    store.isAuth = !store.isAuth;
  };
  return {
    authTitle,
    toggleAuth,
  };
};
