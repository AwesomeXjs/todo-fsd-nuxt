<script setup lang="ts">
  import { useTodoStore } from "@/entities/todo";
  import { Chevron } from "@/shared/assets";

  import { useSortUtils } from "../model/useSortUtils";

  const store = useTodoStore();
  const { changeSortValue } = useSortUtils();

  const items = [
    {
      title: "sortChoiceAll",
      method: () => changeSortValue("sortChoiceAll"),
    },
    {
      title: "sortChoiceComplete",
      method: () => changeSortValue("sortChoiceComplete"),
    },
    {
      title: "sortChoiceInComplete",
      method: () => changeSortValue("sortChoiceInComplete"),
    },
  ];
</script>

<template>
  <MySelectionInput :items="items" :title="store.sortValue" />
</template>

<style scoped lang="scss"></style>
