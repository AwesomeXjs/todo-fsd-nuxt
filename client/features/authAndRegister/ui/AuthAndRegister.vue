<script setup lang="ts">
  import { useRegisterUtils } from "@/features/authAndRegister/model/useRegisterUtils";
  import { useAppStore } from "@/shared/store";

  import { useValidate } from "../config/validations";
  import { authModalContentUtils } from "../model/authUtils";

  const store = useAppStore();

  const props = defineProps<{
    changeBackShow: () => void;
    isBackShow: boolean;
  }>();
  const { t } = useI18n();
  const { authTitle, toggleAuth } = authModalContentUtils();

  const { ForgotPasswordSchema, RegisterSchema, LoginSchema } = useValidate();
  const { submitRegister, isSubmitting } = useRegisterUtils(RegisterSchema, props.changeBackShow);
</script>

<template>
  <MyModal @closeModal="changeBackShow" :modal-show="isBackShow">
    <UiContainer class="flex items-center justify-center">
      <div class="w-full max-w-[340px] text-black">
        <div class="bg-white text-center">
          <h1 class="font-monserrat bg-white text-5xl font-semibold lg:text-4xl">
            {{ authTitle.title }}
          </h1>
          <p @click="toggleAuth" class="mt-2 cursor-pointer text-muted-foreground hover:underline">
            {{ authTitle.question }}
          </p>
        </div>
        <form @submit.prevent="submitRegister" class="mt-10">
          <fieldset :disabled="isSubmitting" class="grid gap-5">
            <UiVeeInput
              v-if="!store.isAuth"
              icon="lucide:user"
              class="transition duration-300"
              name="name"
              label="Full name *"
              :placeholder="t('authPlaceholderName')"
            />
            <UiVeeInput
              icon="lucide:mail"
              class="transition duration-300"
              name="email"
              label="Email *"
              :placeholder="t('authPlaceholderEmail')"
            />
            <UiVeeInput
              icon="lucide:lock"
              class="transition duration-300"
              name="password"
              label="Password *"
              :placeholder="t('authPlaceholderPassword')"
              type="password"
            />
            <UiButton
              type="submit"
              class="w-full transition duration-300 hover:bg-green-950 active:scale-x-95"
              >{{ authTitle.btn }}</UiButton
            >
            <UiDivider :label="t('authDivide')" />
            <UiButton
              type="button"
              class="w-full transition duration-300 hover:bg-[var(--accent-color-light)] hover:text-white active:scale-x-95"
              variant="outline"
            >
              <Icon name="logos:google-icon" class="mr-2 h-4 w-4" />
              {{ t("authGoogle") }}</UiButton
            >
          </fieldset>
        </form>
      </div>
    </UiContainer>
  </MyModal>
</template>

<style scoped></style>
