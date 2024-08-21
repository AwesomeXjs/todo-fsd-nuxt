<script setup lang="ts">
import { useAppStore } from "@/shared/store/useAppStore";

const store = useAppStore();
const { locale, setLocale } = useI18n();

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
      <p>{{ $t("homepageTitle") }}</p>
      <div class="header-right">
        <MySelectionInput
          class="lang_select"
          :title="store.language"
          :items="items"
        />
        <MyButton @click="changeBackShow" variant="apply">Войти</MyButton>
        <ThemeChanger />
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
  <MyModal @closeModal="changeBackShow" :modal-show="isBackShow"></MyModal>
</template>

<style scoped>
.header {
  color: var(--text-color);
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
.lang_select {
  width: 100px;
}
</style>
