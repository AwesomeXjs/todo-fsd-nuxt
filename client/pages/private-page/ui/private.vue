<script setup lang="ts">
  import { useAppStore } from "@/shared/store/useAppStore";

  definePageMeta({
    middleware: ["auth"],
  });

  const store = useAppStore();
</script>

<template>
  <h1>ЭТО ПРИВАТНАЯ СТРАНИЦА ТОЛЬКО ДЛЯ АВТОРИЗОВАННЫХ ПОЛЬЗОВАТЕЛЕЙ</h1>
</template>

<style scoped lang="scss"></style>
