import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const appTheme = ref<"light" | "dark">("light");

  const language = ref<string>("EN");

  const isAuth = ref<boolean>(true);

  const authUserId = ref<number | null>(null);

  return { language, isAuth, authUserId, appTheme };
});
