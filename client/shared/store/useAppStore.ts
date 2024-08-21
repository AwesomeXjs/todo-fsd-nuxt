import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const language = ref<string>("EN");
  const isAuth = ref<boolean>(false);
  const authUserId = ref<number | null>(null);

  return { language };
});
