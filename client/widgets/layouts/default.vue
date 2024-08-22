<script setup lang="ts">
  import { AuthAndRegister, useToastConfig } from "@/features/authAndRegister";
  import { useAppStore } from "@/shared/store/useAppStore";
  import { signOut } from "@firebase/auth";

  const store = useAppStore();
  const { locale, setLocale, t } = useI18n();
  const auth = useFirebaseAuth();
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

  const logout = async () => {
    const { toastUpdateSuccess, toastUpdateError } = useToastConfig(
      "Идет проверка...",
      "Вы вышли из аккаунта!"
    );
    try {
      await signOut(auth!);
      store.authUserId = null;
      toastUpdateSuccess();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toastUpdateError(error);
      }
    }
  };
</script>

<template>
  <div class="container">
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
        <UiButton v-if="store.authUserId" @click="logout" variant="secondary">
          <Icon name="lucide:log-out" />
          {{ t("signOutButton") }}
        </UiButton>
        <UiButton
          v-else
          @click="store.authModalIsShow = !store.authModalIsShow"
          variant="secondary"
        >
          <Icon name="lucide:log-in" />
          {{ signUpText }}</UiButton
        >
        <ThemeChanger />
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
  <AuthAndRegister
    :change-back-show="() => (store.authModalIsShow = !store.authModalIsShow)"
    :is-back-show="store.authModalIsShow"
  />
</template>

<style scoped>
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
