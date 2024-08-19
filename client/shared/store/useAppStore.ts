import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const createTodoModalShow = ref(false);
  const editTodoModalShow = ref(false);

  return { createTodoModalShow, editTodoModalShow };
});
