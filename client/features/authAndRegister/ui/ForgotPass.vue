<script setup lang="ts">
  import { useAppStore } from "@/shared/store";

  import { useValidate } from "../config/validations";
  import { useForgotPass } from "../model/useForgotPass";

  const props = defineProps<{
    changeBackShow: () => void;
  }>();
  const store = useAppStore();

  const { t } = useI18n();
  const { ForgotPasswordSchema } = useValidate();
  const { submit, isSubmitting } = useForgotPass(ForgotPasswordSchema, props.changeBackShow);
</script>

<template>
  <form @submit.prevent="submit" class="mt-10">
    <fieldset :disabled="isSubmitting" class="grid gap-5">
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
