<script setup lang="ts">
  import { useWebSocket } from "@vueuse/core";

  const { status, data, send, open, close } = useWebSocket(
    "wss://fstream.binance.com/ws/!markPrice@arr@1s",
    {
      autoReconnect: true,
    }
  );
  const allMarket = computed(() => JSON.parse(data.value));
</script>

<template>
  <h1>Тут будут веб сокеты</h1>
  <div v-if="status === 'CONNECTING'">Loading...</div>
  <div v-else-if="status === 'CLOSED'">Соединения разорвано</div>
  <div v-else>
    <div class="flex flex-wrap items-center">
      <div
        class="mx-1 my-2 inline-block flex items-center border-2 p-2"
        v-for="ticker in allMarket"
      >
        <h3 class="mr-2">Ticker: {{ ticker.s }}</h3>
        <h3>Price: {{ ticker.p }}</h3>
      </div>
    </div>
  </div>

  <UiButton @click="">Send</UiButton>
</template>

<style scoped lang="scss"></style>
