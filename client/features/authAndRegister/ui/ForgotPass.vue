<script setup lang="ts">
  import { useAppStore } from "@/shared/store";

  const store = useAppStore();

  const { t } = useI18n();
</script>

<template>
  <form @submit.prevent="" class="mt-10">
    <fieldset :disabled="false" class="grid gap-5">
      <UiVeeInput
        icon="lucide:mail"
        class="transition duration-300"
        name="email"
        :label="t('authTitleEmail') + '*'"
        :placeholder="t('authPlaceholderEmail')"
      />
      <UiButton
        type="submit"
        class="w-full transition duration-300 hover:bg-green-950 active:scale-x-95"
        >Восстановить</UiButton
      >
      <UiButton @click="store.isForgotPassword = false" variant="secondary">Вернуться</UiButton>
    </fieldset>
  </form>
</template>

<style scoped lang="scss"></style>
