<script setup lang="ts">
import { authModalContentUtils } from "../model/authUtils";
import { useRegisterUtils } from "../model/useRegisterUtils";

defineProps<{
  changeBackShow: () => void;
  isBackShow: boolean;
}>();

const { email, password, sighUp } = useRegisterUtils();
const { authTitle, toggleAuth } = authModalContentUtils();
const { t } = useI18n();

const submitForm = (): void => {
  sighUp();
};
</script>

<template>
  <MyModal @closeModal="changeBackShow" :modal-show="isBackShow">
    <form @submit.prevent="submitForm">
      <h1>{{ authTitle.title }}</h1>
      <div>
        <input v-model="email" name="email" type="text" />
        <label for="email">{{ t("signModalEmail") }}</label>
      </div>
      <p @click="toggleAuth">{{ authTitle.question }}</p>
      <div>
        <input v-model="password" name="password" type="password" />
        <label for="password">{{ t("signModalPass") }}</label>
      </div>
      <div class="btn_wrapper">
        <MyButton variant="cancel">Отмена</MyButton>
        <MyButton type="submit" variant="apply">{{ authTitle.btn }}</MyButton>
      </div>
    </form>
  </MyModal>
</template>

<style scoped lang="scss"></style>
