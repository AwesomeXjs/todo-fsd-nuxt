<script setup lang="ts">
  import { AuthAndRegister } from "@/features/authAndRegister";
  import { useAppStore } from "@/shared/store/useAppStore";

  const store = useAppStore();
  const { locale, setLocale, t } = useI18n();

  const { useSelectBackgroundShow } = useUtils();
  const { changeBackShow, isBackShow } = useSelectBackgroundShow();

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
</script>

<template>
  <div class="container">
    <header class="header">
      <p>{{ t("homepageTitle") }}</p>
      <div class="header-right">
        <MySelectionInput :title="store.language" :items="items" />
        <UiButton @click="changeBackShow" variant="secondary">{{ t("signInButton") }}</UiButton>
        <ThemeChanger />
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
  <AuthAndRegister :change-back-show="changeBackShow" :is-back-show="isBackShow" />
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
