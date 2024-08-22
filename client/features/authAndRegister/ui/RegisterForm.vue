<script setup lang="ts">
  import { useAppStore } from "@/shared/store";

  import { useValidate } from "../config/validations";
  import { authModalContentUtils } from "../model/authUtils";
  import { useRegisterUtils } from "../model/useRegisterUtils";

  const props = defineProps<{
    changeBackShow: () => void;
    isBackShow: boolean;
  }>();

  const store = useAppStore();
  const { t } = useI18n();

  const { authTitle, toggleAuth } = authModalContentUtils();
  const { RegisterSchema } = useValidate();
  const { submitRegister, isSubmitting } = useRegisterUtils(RegisterSchema, props.changeBackShow);
</script>

<template>
  <form @submit.prevent="submitRegister" class="mt-10">
    <fieldset :disabled="isSubmitting" class="grid gap-5">
      <UiVeeInput
        v-if="!store.isAuth"
        icon="lucide:user"
        class="transition duration-300"
        name="name"
        :label="t('authTitleName') + '*'"
        :placeholder="t('authPlaceholderName')"
      />
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
    </fieldset>
  </form>
</template>

<style scoped lang="scss"></style>
