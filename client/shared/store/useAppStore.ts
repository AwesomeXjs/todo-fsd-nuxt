import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const appTheme = ref<"light" | "dark">("light");
  const isForgotPassword = ref<boolean>(false);
  const language = ref<string>("EN");
  const isAuth = ref<boolean>(false);
  const authUserId = ref<number | null>(null);

  return { language, isAuth, authUserId, appTheme, isForgotPassword };
});
