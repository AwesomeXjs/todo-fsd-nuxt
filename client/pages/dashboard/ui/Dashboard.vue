<script setup lang="ts">
  const user = useCurrentUser();
</script>

<template>
  <h1>Dashboard page, this is {{ user?.displayName }}</h1>
</template>

<style scoped lang="scss"></style>
