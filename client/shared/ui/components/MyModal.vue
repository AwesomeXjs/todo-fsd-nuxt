<script setup lang="ts">
  import { useAppStore } from "@/shared/store/useAppStore";

  const appStore = useAppStore();

  defineProps<{
    modalShow: boolean;
  }>();

  const emit = defineEmits(["closeModal"]);
</script>

<template>
  <div @click.stop v-if="modalShow" class="modal-wrapper bg-white">
    <slot />
  </div>
  <div v-if="modalShow" @click="emit('closeModal')" class="modal-background"></div>
</template>

<style scoped lang="scss">
  .modal-wrapper {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 18px 30px;
    z-index: 5;
    border-radius: 16px;
    transition: 0.2s ease-out;
    animation: modalShow 0.2s ease-out;
  }
  .modal-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    cursor: pointer;
    animation: modalShow 0.2s ease-out;
  }
</style>
