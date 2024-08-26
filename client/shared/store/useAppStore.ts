import { useWebSocket } from "@vueuse/core";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const appTheme = ref<"light" | "dark">("light");
  const isForgotPassword = ref<boolean>(false);
  const language = ref<string>("EN");
  const isAuth = ref<boolean>(false);
  const authUserId = ref<string | null>(null);
  const authModalIsShow = ref<boolean>(false);

  const { status, data, send, open, close } = useWebSocket(
    "wss://fstream.binance.com/ws/!markPrice@arr@1s",
    {
      autoReconnect: true,
    }
  );
  const allMarket = computed(() => JSON.parse(data.value));

  watch(authUserId, () => {
    if (!authUserId.value) {
      navigateTo("/");
    }
  });
  return {
    language,
    isAuth,
    authUserId,
    appTheme,
    isForgotPassword,
    authModalIsShow,
    allMarket,
    status,
  };
});
