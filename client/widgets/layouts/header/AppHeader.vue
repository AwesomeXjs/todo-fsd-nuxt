<script setup lang="ts">
  import { useTodoStore } from "@/entities/todo";
  import { Logout } from "@/features/authAndRegister";
  import { useAppStore } from "@/shared/store";

  const todoStore = useTodoStore();
  const store = useAppStore();
  const { locale, setLocale, t } = useI18n();
  const router = useRouter();
  const { COLLECTION_NAME } = useVariables();
  const { $apiService } = useNuxtApp();

  const signUpText = computed(() => {
    if (store.isAuth) {
      return t("authBtnEnter");
    } else {
      return t("authBtnSignUp");
    }
  });

  const items = [
    {
      title: "EN",
      method: () => {
        store.language = "EN";
        setLocale("en");
      },
    },
    {
      title: "RU",
      method: () => {
        store.language = "RU";
        setLocale("ru");
      },
    },
  ];

  const openAuthModal = () => {
    store.isForgotPassword = false;
    store.authModalIsShow = !store.authModalIsShow;
  };

  const fetchTodos = async () => {
    const user = await getCurrentUser();
    if (user) {
      await $apiService.fetchTodosByData({
        COLLECTION_NAME,
        userId: user?.uid,
        targetStore: todoStore,
        orderBy_: "createdAt",
        desc: true,
      });
    }
  };
</script>

<template>
  <header class="header">
    <NuxtLink to="/">
      {{ t("homepageTitle") }}
    </NuxtLink>
    <NuxtLink to="/web-sockets-practice">
      <UiButton variant="secondary">К веб сокетам!</UiButton>
    </NuxtLink>
    <div class="header-right">
      <MySelectionInput :title="store.language" :items="items" />
      <UiButton @click="fetchTodos" variant="secondary">
        <Icon name="lucide:log-out" />
        Загрузить данные по дате
      </UiButton>
      <UiButton @click="router.push('/private')" variant="secondary">
        <Icon name="lucide:log-out" />
        Приватная страница
      </UiButton>
      <Logout v-if="store.authUserId" />
      <UiButton v-else @click="openAuthModal" variant="secondary">
        <Icon name="lucide:log-in" />
        {{ signUpText }}</UiButton
      >
      <ThemeChanger />
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    font-size: 26px;
    font-weight: bold;
    text-align: center;
    padding-top: 40px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 15px;
  }
</style>
