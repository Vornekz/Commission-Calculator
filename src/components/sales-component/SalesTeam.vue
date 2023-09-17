<script setup lang="ts">
import { TeamInfo, useSalesData } from "@/store/salesData";
import { ref, watch } from "vue";

const sales = useSalesData();
const salesData = ref<TeamInfo[]>([]);

watch(
  () => sales.teamInfo,
  (newValue) => {
    salesData.value = newValue;
  }
);
</script>

<template>
  <section class="sales-team">
    <div class="sales-team__titles">
      <button class="sales-team__titles-view"></button>
      <div class="sales-team__titles-name1">First Name</div>
      <div class="sales-team__titles-name2">Second Name</div>
      <div class="sales-team__titles-sales">Total Sales</div>
      <div class="sales-team__titles-date">Join Date</div>
    </div>
    <div
      class="sales-team__data"
      v-for="item in salesData"
      :key="`team ${item.id}`"
    >
      <button class="sales-team__data-view">View</button>
      <div class="sales-team__data-name1">{{ item.firstName }}</div>
      <div class="sales-team__data-name2">{{ item.lastName }}</div>
      <div class="sales-team__data-sales">{{ item.totalSales }}</div>
      <div class="sales-team__data-date">{{ item.date }}</div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.sales-team {
  display: grid;
  grid-template-columns:
    auto minmax(auto, 1fr) minmax(auto, 1fr)
    minmax(auto, 1fr) minmax(auto, 1fr);

  column-gap: 10px;

  &__titles {
    display: contents;
  }

  &__data {
    display: contents;
  }
}
</style>
