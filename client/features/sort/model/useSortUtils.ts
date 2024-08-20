import { useTodoStore } from "@/entities/todo";

export const useSortUtils = (searchTodos: any = null) => {
  const isSortShow = ref(false);
  const todoStore = useTodoStore();

  const changeSortShow = () => {
    isSortShow.value = !isSortShow.value;
  };
  const changeSortValue = (value: string) => {
    todoStore.sortValue = value;
  };

  const sortedAndFilteredTodos = computed(() => {
    if (searchTodos) {
      const todoStore = useTodoStore();

      if (todoStore.sortValue === "sortChoiceAll") {
        return [...searchTodos.value];
      }
      if (todoStore.sortValue === "sortChoiceInComplete") {
        return [...searchTodos.value].filter((todo) => !todo.completed);
      }
      if (todoStore.sortValue === "sortChoiceComplete") {
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
