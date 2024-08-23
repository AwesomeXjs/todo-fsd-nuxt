<script setup lang="ts">
  import { useWebSocket } from "@vueuse/core";

  const { status, data, send, open, close } = useWebSocket(
    "wss://fstream.binance.com/ws/adausdt@aggTrade"
  );
  const { data: btcData } = useWebSocket("wss://fstream.binance.com/ws/btcusdt@aggTrade");
  console.log(status);
</script>

<template>
  <h1>Тут будут веб сокеты</h1>
  <h1>{{ JSON.parse(data).s }} : {{ JSON.parse(data).p }}</h1>
  <h1>{{ JSON.parse(btcData).s }} : {{ JSON.parse(btcData).p }}</h1>
  <UiButton @click="">Send</UiButton>
</template>

<style scoped lang="scss"></style>
