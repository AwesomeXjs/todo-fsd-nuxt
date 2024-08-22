<script setup lang="ts">
  import { AuthAndRegister, Logout } from "@/features/authAndRegister";
  import { useAppStore } from "@/shared/store/useAppStore";

  import AppHeader from "./header/AppHeader.vue";

  const store = useAppStore();

  onMounted(async () => {
    const user = await getCurrentUser();
    if (user) {
      store.authUserId = user.uid;
    }
  });
</script>

<template>
  <div class="container">
    <AppHeader />
    <main>
      <slot></slot>
    </main>
  </div>
  <AuthAndRegister
    :change-back-show="() => (store.authModalIsShow = !store.authModalIsShow)"
    :is-back-show="store.authModalIsShow"
  />
</template>

<style scoped></style>
