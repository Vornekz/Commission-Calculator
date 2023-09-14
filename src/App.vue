<script setup lang="ts">
import Sales from "@/views/Sales.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
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
