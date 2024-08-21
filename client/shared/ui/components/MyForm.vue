<script setup lang="ts">
  const emit = defineEmits(["success", "cancel"]);

  const inputValue = defineModel("inputValue");

  defineProps<{
    title: string;
    placeholder: string;
  }>();
</script>

<template>
  <div class="form-header">
    <h3>{{ title }}</h3>
    <input
      v-focus
      @keydown.enter="emit('success')"
      v-model="inputValue"
      :placeholder="placeholder"
      class="new-todo-input"
      type="text"
    />
  </div>
  <div class="buttons-wrapper">
    <MyButton @click="emit('cancel')" variant="cancel">{{ $t("cancelButton") }}</MyButton>
    <MyButton @click="emit('success')" variant="apply">{{ $t("accessButton") }}</MyButton>
  </div>
</template>

<style scoped lang="scss">
  .form-header {
    text-align: center;
    min-width: 400px;
    min-height: 200px;
    & > h3 {
      margin-bottom: 25px;
    }
  }
  .new-todo-input {
    width: 100%;
    border: 1px solid var(--placeholder-color);
    border-radius: 8px;
    padding: 8px 12px;
    transition: 0.2s ease-out;

    &:focus {
      border: 1px solid var(--accent-color);
    }

    &::placeholder {
      color: var(--placeholder-color);
    }
  }
  .buttons-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
