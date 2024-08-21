<script setup lang="ts">
import { useAppStore } from "@/shared/store";
import { authModalContentUtils } from "../model/authUtils";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";

const props = defineProps<{
  changeBackShow: () => void;
  isBackShow: boolean;
}>();
const { $toast } = useNuxtApp();

const store = useAppStore();

const email = ref<string>("");
const password = ref<string>("");
const isLoading = ref<boolean>(false);
const auth = useFirebaseAuth();

const sighUp = async (): Promise<void> => {
  try {
    isLoading.value = true;

    const { user } = await createUserWithEmailAndPassword(
      auth!,
      email.value,
      password.value
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      $toast(error.message, { type: "error", theme: store.appTheme });
      console.log(error.message);
    }
  } finally {
    isLoading.value = false;
  }
};

const submitForm = (): void => {
  const prom = sighUp();
  $toast.promise(prom, {
    pending: "Подождите идет регистрация...",
    success: "Регистрация прошла успешно!",
  });
};

const { authTitle, toggleAuth } = authModalContentUtils();
</script>

<template>
  <MyModal @closeModal="changeBackShow" :modal-show="isBackShow">
    <form @submit.prevent="submitForm">
      <h1>{{ authTitle.title }}</h1>
      <div>
        <input v-model="email" name="email" type="text" />
        <label for="email">Email</label>
      </div>
      <p @click="toggleAuth">{{ authTitle.question }}</p>
      <div>
        <input v-model="password" name="password" type="password" />
        <label for="password">Password</label>
      </div>
      <div class="btn_wrapper">
        <MyButton variant="cancel">Отмена</MyButton>
        <MyButton type="submit" variant="apply">{{ authTitle.btn }}</MyButton>
      </div>
    </form>
  </MyModal>
</template>

<style scoped lang="scss"></style>
