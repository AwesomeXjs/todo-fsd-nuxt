<script setup lang="ts">
  import { useAppStore } from "@/shared/store";
  import { signOut } from "@firebase/auth";

  import { useToastConfig } from "../../../shared/lib/composables/useToastConfig";

  const store = useAppStore();
  const auth = useFirebaseAuth();
  const { t } = useI18n();

  const logout = async () => {
    const { toastUpdateSuccess, toastUpdateError } = useToastConfig(
      "Идет проверка...",
      "Вы вышли из аккаунта!"
    );
    try {
      await signOut(auth!);
      store.authUserId = null;
      toastUpdateSuccess();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toastUpdateError(error);
      }
    }
  };
</script>

<template>
  <UiButton @click="logout" variant="secondary">
    <Icon name="lucide:log-out" />
    {{ t("signOutButton") }}
  </UiButton>
</template>

<style scoped lang="scss"></style>
