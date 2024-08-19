<script setup lang="ts">
import { useAppStore } from "@/shared/store/useAppStore";
const appStore = useAppStore();

defineProps<{
  modalShow: boolean;
}>();

const closeModals = () => {
  appStore.createTodoModalShow = false;
  appStore.editTodoModalShow = false;
};
</script>

<template>
  <div @click.stop v-if="modalShow" class="modal-wrapper">
    <slot />
  </div>
  <div v-if="modalShow" @click="closeModals" class="modal-background"></div>
</template>

<style scoped lang="scss">
.modal-wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 18px 30px;
  background-color: var(--background-color);
  z-index: 3;
  border-radius: 16px;
  transition: $transition;
  animation: modalShow 0.2s linear;
}
.modal-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
  animation: modalBackground 0.2s linear;
}
</style>
