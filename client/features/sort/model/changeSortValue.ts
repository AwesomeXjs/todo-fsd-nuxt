export const useChangeSort = () => {
  const sortValue = ref<"ALL" | "Complete" | "Incomplete">("ALL");
  const isSortShow = ref(false);

  const changeSortShow = () => {
    isSortShow.value = !isSortShow.value;
  };
  const changeSortValue = (value: "ALL" | "Complete" | "Incomplete") => {
    sortValue.value = value;
  };

  return { sortValue, isSortShow, changeSortShow, changeSortValue };
};
