<script setup lang="ts"></script>

<template>
  <div class="container">
    <header class="header">
      <h1>TODO LIST</h1>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<style scoped>
.header {
  color: var(--text-color);
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  padding-top: 40px;
  margin-bottom: 20px;
}
</style>
