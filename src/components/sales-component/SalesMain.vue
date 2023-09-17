<script setup lang="ts">
import SalesTeam from "@/components/sales-component/SalesTeam.vue";
</script>

<template>
  <section class="sales-main">
    <header class="sales-main__header main-header">
      <h4 class="main-header__title">Sales Team</h4>
      <button class="main-header__filter">
        <font-awesome-icon
          :icon="['fas', 'filter-circle-dollar']"
          beat
          style="color: #858585"
        />
        <p>Filter</p>
      </button>
      <button class="main-header__register">Register Sale</button>
    </header>
    <SalesTeam />
  </section>
</template>

<style scoped lang="scss">
.sales-main {
  width: 100vw;
  white-space: nowrap;
  overflow-x: auto;
  padding: 50px 40px;

  &::-webkit-scrollbar-thumb {
    background-color: #af8ae2;
    border-radius: 4px;
  }

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: #313131;
  }

  &__header {
    display: grid;
    column-gap: 30px;
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: "a b c d e f ";
    align-items: center;
  }
  .main-header {
    &__title {
      width: 150px;
      font-size: 24px;
      grid-area: a;
    }

    &__filter {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-area: e;
      justify-self: end;
      width: 100px;
      height: 30px;
      padding: 10px;
      background-color: inherit;
      border: none;
      border-radius: 15px;
      color: #fff;
      transition: 0.5s;
      cursor: pointer;

      svg {
        margin-right: 10px;
      }

      &:hover {
        background-color: #3d3c3c;
      }
    }

    &__register {
      grid-area: f;
      width: 140px;
      height: 30px;
      border-radius: 15px;
      border: none;
      background-color: #6bcee5;
      color: #fff;
      transition: 0.5s;
      cursor: pointer;

      &:hover {
        background-color: #8bded0;
      }
    }
  }
}
</style>
