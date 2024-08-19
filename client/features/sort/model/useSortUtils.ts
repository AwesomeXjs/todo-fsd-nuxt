import { useTodoStore } from "@/entities/todo";

export const useSortUtils = (searchTodos: any = null) => {
  const isSortShow = ref(false);
  const todoStore = useTodoStore();

  const changeSortShow = () => {
    isSortShow.value = !isSortShow.value;
  };
  const changeSortValue = (value: "ALL" | "Complete" | "Incomplete") => {
    todoStore.sortValue = value;
  };

  const sortedAndFilteredTodos = computed(() => {
    if (searchTodos) {
      const todoStore = useTodoStore();

      if (todoStore.sortValue === "ALL") {
        return [...searchTodos.value];
      }
      if (todoStore.sortValue === "Incomplete") {
        return [...searchTodos.value].filter((todo) => !todo.completed);
      }
      if (todoStore.sortValue === "Complete") {
        return [...searchTodos.value].filter((todo) => todo.completed);
      }
    }
  });

  return {
    isSortShow,
    changeSortShow,
    changeSortValue,
    sortedAndFilteredTodos,
  };
};
