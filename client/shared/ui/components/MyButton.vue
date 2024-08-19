<script setup lang="ts">
const props = defineProps<{
  variant: "cancel" | "apply";
}>();

const checkVariant = () => {
  if (props.variant === "cancel") {
    return "cancel-style";
  }
  if (props.variant === "apply") {
    return "apply-style";
  }
};
</script>

<template>
  <button :class="checkVariant()">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.cancel-style {
  background-color: var(--background-color);
  color: var(--accent-color);
  font-weight: bold;
  border: 1px solid var(--accent-color);
  &:hover {
    background-color: #b12424;
    border: 1px solid #b12424;
    color: white;
  }
}
.apply-style {
  background-color: var(--accent-color);
  color: white;
  font-weight: bold;
  border: 1px solid var(--accent-color);
  &:hover {
    background-color: green;
    border: 1px solid green;
    color: white;
  }
}
.cancel-style,
.apply-style {
  padding: 8px 20px;
  border-radius: $border-radius;
  cursor: pointer;
  transition: $transition;
  &:active {
    transform: scale(0.9);
  }
}
</style>
