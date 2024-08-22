<script setup lang="ts">
  import { useTodoStore } from "@/entities/todo";
  import { Search } from "@/shared/assets";

  const store = useTodoStore();
  const { t } = useI18n();
</script>

<template>
  <div class="input-wrapper">
    <input
      v-model="store.inputValue"
      :placeholder="t('placeholderFilter')"
      class="filter"
      type="text"
      name="filterName"
    />
    <label class="input-label" for="filterName">
      <Search fill="#6C63FF" />
    </label>
  </div>
</template>

<style scoped lang="scss">
  .input-wrapper {
    display: flex;
    width: 100%;
    align-items: center;
    border: 1px solid var(--placeholder-color);
    border-radius: 8px;
    overflow: hidden;
  }

  .filter {
    padding: 11px 16px;
    transition: 0.2s ease-out;
    width: 100%;
    border: none;
    background-color: var(--background-color);
    &::placeholder {
      color: var(--placeholder-color);
    }
  }

  .input-label {
    padding-top: 9px;
    padding-right: 15px;
  }
</style>
