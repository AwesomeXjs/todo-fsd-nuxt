<script setup lang="ts">
import { Chevron } from "@/shared/assets";
import { useUtils } from "@/shared/lib/composables/useUtils";

const { useSelectBackgroundShow } = useUtils();
const { changeBackShow, isBackShow } = useSelectBackgroundShow();

defineProps<{
  title: string;
  items: {
    title: string;
    method: () => void;
  }[];
}>();
</script>

<template>
  <div class="sort-wrapper">
    <button @click="changeBackShow" class="sort-header">
      <p>{{ $t(title) }}</p>
      <Chevron :class="['chevron', { 'chevron-rotate': isBackShow }]" />
    </button>
    <div class="sort-choice" v-if="isBackShow">
      <div v-for="item in items" :key="item.title" @click="item.method">
        <p>{{ $t(item.title) }}</p>
      </div>
    </div>
  </div>
  <teleport to="body">
    <div @click="changeBackShow" class="sort-overlay" v-if="isBackShow"></div>
  </teleport>
</template>

<style lang="scss">
.sort-wrapper {
  position: relative;
}
.sort-header {
  cursor: pointer;
  //min-width: 250px;
  background-color: var(--accent-color);
  border: 2px solid var(--accent-color);
  display: flex;
  color: white;
  padding: 8px 20px;
  align-items: center;
  border-radius: $border-radius;
  gap: 25px;
  transition: $transition;
  box-sizing: content-box;
  justify-content: center;
  white-space: nowrap;
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
  min-width: 100%;
  left: 0;
  z-index: 5;
  border-radius: $border-radius;
  background-color: var(--background-color);
  color: var(--accent-color);
  display: flex;
  flex-direction: column;
  animation: animationSort 0.2s ease-out alternate;
  white-space: nowrap;
  font-size: $regular-text;

  & > div {
    border: 1px solid var(--accent-color);
    cursor: pointer;
    padding: 2px 5px;
    transition: $transition;
    background-color: var(--background-color);
    box-sizing: content-box;
    &:hover {
      background-color: var(--placeholder-color);
      color: white;
    }
  }
  & > div:first-child {
    border-bottom: none;
    border-radius: 5px 5px 0 0;
  }

  & > div:nth-child(2) {
    border-bottom: none;
    border-top: none;
  }
  & > div:last-child {
    border-top: none;
    border-radius: 0 0 5px 5px;
    border-bottom: 1px solid var(--accent-color);
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
