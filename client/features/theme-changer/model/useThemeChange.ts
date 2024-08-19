export const useThemeChange = () => {
  const inputValue = ref<boolean>(false);

  const changeTheme = () => {
    if (inputValue.value === true) {
      document.documentElement.setAttribute("dark", "");
    } else {
      document.documentElement.removeAttribute("dark");
    }
  };
  watch(inputValue, () => {
    changeTheme();
  });

  return { inputValue };
};
