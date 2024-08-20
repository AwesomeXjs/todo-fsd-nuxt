<script setup lang="ts">
import { Search } from "@/shared/assets";
import { useTodoStore } from "@/entities/todo";

const store = useTodoStore();
</script>

<template>
  <div class="input-wrapper">
    <input
      v-model="store.inputValue"
      placeholder="Search note..."
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
  border-radius: $border-radius;
  overflow: hidden;
}

.filter {
  padding: 11px 16px;
  transition: $transition;
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
