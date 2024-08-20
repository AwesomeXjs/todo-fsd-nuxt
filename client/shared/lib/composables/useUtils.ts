export const useUtils = () => {
  const sayExample = () => console.log("HELLO FROM COMPOSABLES");

  const useSelectBackgroundShow = (searchTodos: any = null) => {
    const isBackShow = ref(false);
    const changeBackShow = () => {
      isBackShow.value = !isBackShow.value;
    };
    return { isBackShow, changeBackShow };
  };

  return { sayExample, useSelectBackgroundShow };
};
