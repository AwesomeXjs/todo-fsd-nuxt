<script setup lang="ts">
  import { useWebSocket } from "@vueuse/core";

  const { status, data, send, open, close } = useWebSocket(
    "wss://fstream.binance.com/ws/adausdt@aggTrade",
    {
      autoReconnect: true,
    }
  );
  const { data: btcData } = useWebSocket("wss://fstream.binance.com/ws/btcusdt@aggTrade", {
    autoReconnect: true,
  });
  const btcTicker = computed(() => JSON.parse(btcData.value));
  const btcPrice = computed(() => JSON.parse(btcData.value));
</script>

<template>
  <h1>Тут будут веб сокеты</h1>
  <h1>{{ btcTicker.s }} : {{ btcPrice.p }}</h1>
  <h1>{{}} : {{}}</h1>
  <UiButton @click="">Send</UiButton>
</template>

<style scoped lang="scss"></style>
