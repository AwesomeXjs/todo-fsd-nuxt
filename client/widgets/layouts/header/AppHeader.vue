<script setup lang="ts">
  import { Logout } from "@/features/authAndRegister";
  import { useAppStore } from "@/shared/store";

  const store = useAppStore();
  const { locale, setLocale, t } = useI18n();
  const router = useRouter();

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
</script>

<template>
  <header class="header">
    <NuxtLink to="/">
      {{ t("homepageTitle") }}
    </NuxtLink>
    <div class="header-right">
      <MySelectionInput :title="store.language" :items="items" />
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
