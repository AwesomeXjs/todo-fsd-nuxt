<script setup lang="ts">
  import { useAppStore } from "@/shared/store";

  import { authModalContentUtils } from "../model/authUtils";
  import { useGoogleAuth } from "../model/useGoogleAuth";
  import ForgotPass from "./ForgotPass.vue";
  import LoginForm from "./LoginForm.vue";
  import RegisterForm from "./RegisterForm.vue";

  const store = useAppStore();

  const props = defineProps<{
    changeBackShow: () => void;
    isBackShow: boolean;
  }>();
  const { t } = useI18n();
  const { authTitle, toggleAuth } = authModalContentUtils();
  const { loginWithGoogle } = useGoogleAuth(props.changeBackShow);
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
        <div class="mb-2">
          <RegisterForm
            v-show="!store.isAuth && !store.isForgotPassword"
            :change-back-show="changeBackShow"
          />
          <LoginForm
            v-show="store.isAuth && !store.isForgotPassword"
            :change-back-show="changeBackShow"
          />
          <ForgotPass :change-back-show="changeBackShow" v-show="store.isForgotPassword" />
        </div>

        <UiDivider :label="t('authDivide')" />
        <UiButton
          type="button"
          class="w-full transition duration-300 hover:bg-[var(--accent-color-light)] hover:text-white active:scale-x-95"
          variant="outline"
          @click="loginWithGoogle"
        >
          <Icon name="logos:google-icon" class="mr-2 h-4 w-4" />
          {{ t("authGoogle") }}</UiButton
        >
      </div>
    </UiContainer>
  </MyModal>
</template>

<style scoped></style>
