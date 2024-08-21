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
  <div class="sort-wrapper flex items-center">
    <UiButton variant="secondary" @click="changeBackShow" class="">
      <p>{{ $t(title) }}</p>
      <Chevron :class="['chevron', { 'chevron-rotate': isBackShow }]" />
    </UiButton>
    <div class="sort-choice" v-if="isBackShow">
      <div v-for="(item, index) of items" :key="index" @click="item.method">
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
    display: flex;
    color: white;
    align-items: center;
    border-radius: 8px;
    gap: 25px;
    transition: 0.2s ease-out;
    justify-content: center;
    white-space: nowrap;
    background-color: var(--background-color);
  }
  .chevron-rotate {
    transition: 0.2s ease-out;
    transform: rotate(180deg);
  }
  .sort-choice {
    position: absolute;
    bottom: 0;
    top: 100%;
    min-width: 100%;
    left: 0;
    z-index: 5;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    animation: animationSort 0.2s ease-out alternate;
    white-space: nowrap;
    font-size: 16px;

    & > div {
      border: 1px solid var(--accent-color);
      cursor: pointer;
      padding: 2px 5px;
      transition: 0.2s ease-out;
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
