<script setup lang="ts">
  defineProps<{
    stroke: string;
  }>();
</script>

<template>
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.87426 7.61505C3.80724 6.74386 4.49607 6 5.36983 6H12.6302C13.504 6 14.1928 6.74385 14.1258 7.61505L13.6065 14.365C13.5464 15.1465 12.8948 15.75 12.1109 15.75H5.88907C5.10526 15.75 4.4536 15.1465 4.39348 14.365L3.87426 7.61505Z"
      :stroke="stroke"
    />
    <path d="M14.625 3.75H3.375" :stroke="stroke" stroke-linecap="round" />
    <path
      d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z"
      :stroke="stroke"
    />
    <path d="M10.5 9V12.75" :stroke="stroke" stroke-linecap="round" />
    <path d="M7.5 9V12.75" :stroke="stroke" stroke-linecap="round" />
  </svg>
</template>

<style scoped></style>
