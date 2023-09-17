<script setup lang="ts">
import Sales from "@/views/Sales.vue";
import { useSalesData } from "@/store/salesData.ts";
import { onMounted } from "vue";

onMounted(async () => {
  try {
    await fetch("./data/SalesTeam.json")
      .then((response) => response.json())
      .then((value) => useSalesData().updateTeam(value));
  } catch (error) {
    console.error("Error", error);
  }
});
</script>

<template>
  <div id="app">
    <Sales />
  </div>
</template>

<style scoped lang="scss">
#app {
  min-height: 100vh;
  background-color: #2f2f2f;
  color: #fff;
}
</style>
