<script setup lang="ts">
  import { useAppStore } from "@/shared/store";

  import { useValidate } from "../config/validations";
  import { authModalContentUtils } from "../model/authUtils";
  import { useLogin } from "../model/useLogin";

  const store = useAppStore();
  const { t } = useI18n();

  const props = defineProps<{
    changeBackShow: () => void;
  }>();

  const { authTitle, toggleAuth } = authModalContentUtils();
  const { LoginSchema } = useValidate();
  const { submitLogin, isSubmitting } = useLogin(LoginSchema, props.changeBackShow);
</script>

<template>
  <form @submit.prevent="submitLogin" class="mt-10">
    <fieldset :disabled="isSubmitting" class="grid gap-5">
      <UiVeeInput
        icon="lucide:mail"
        class="transition duration-300"
        name="email"
        :label="t('authTitleEmail') + '*'"
        :placeholder="t('authPlaceholderEmail')"
      />
      <UiVeeInput
        icon="lucide:lock"
        class="transition duration-300"
        name="password"
        :label="t('authTitlePassword') + '*'"
        :placeholder="t('authPlaceholderPassword')"
        type="password"
      />
      <UiButton
        type="submit"
        class="w-full transition duration-300 hover:bg-green-950 active:scale-x-95"
        >{{ authTitle.btn }}</UiButton
      >
      <UiButton @click="store.isForgotPassword = true" type="button" variant="secondary"
        >Забыл пароль</UiButton
      >
    </fieldset>
  </form>
</template>

<style scoped lang="scss"></style>
