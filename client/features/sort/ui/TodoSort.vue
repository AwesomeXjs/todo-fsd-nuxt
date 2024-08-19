<script setup lang="ts">
import { Chevron } from "@/shared/assets";

import { useChangeSort } from "../model/changeSortValue";

const { sortValue, isSortShow, changeSortValue, changeSortShow } =
  useChangeSort();
</script>

<template>
  <div class="sort-wrapper">
    <div @click="changeSortShow" class="sort-header">
      <p>{{ sortValue }}</p>
      <Chevron :class="['chevron', { 'chevron-rotate': isSortShow }]" />
    </div>
    <div class="sort-choice" v-if="isSortShow">
      <div @click="changeSortValue('ALL')">ALL</div>
      <div @click="changeSortValue('Complete')">Complete</div>
      <div @click="changeSortValue('Incomplete')">Incomplete</div>
    </div>
  </div>
  <teleport to="body">
    <div @click="changeSortShow" class="sort-overlay" v-if="isSortShow"></div>
  </teleport>
</template>

<style scoped lang="scss">
.sort-wrapper {
  position: relative;
}
.sort-header {
  cursor: pointer;
  background-color: var(--accent-color);
  border: 2px solid var(--accent-color);
  display: flex;
  color: white;
  padding: 5px 20px;
  align-items: center;
  border-radius: $border-radius;
  gap: 25px;
  transition: $transition;
  &:hover {
    background-color: var(--accent-color-dark);
  }
}
.chevron-rotate {
  transition: $transition;
  transform: rotate(180deg);
}
.sort-choice {
  position: absolute;
  bottom: 0;
  top: 100%;
  width: 100%;
  left: 0;
  z-index: 5;
  border-radius: $border-radius;
  background-color: var(--background-color);
  color: var(--accent-color);
  display: flex;
  flex-direction: column;
  animation: animationSort 0.2s ease-out alternate;
  & > div {
    border: 1px solid var(--accent-color);
    cursor: pointer;
    padding: 2px 5px;
    transition: $transition;
    background-color: var(--background-color);
    &:hover {
      background-color: var(--placeholder-color);
      color: white;
    }
  }
  & > div:first-child {
    border-bottom: none;
    border-radius: 5px 5px 0 0;
  }
  & > div:last-child {
    border-top: none;
    border-radius: 0 0 5px 5px;
  }
  & > div:nth-child(2) {
    border-bottom: none;
    border-top: none;
  }
}

.sort-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 4;
}

@keyframes animationSort {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
