<script setup lang="ts">
import SalesMain from "@/components/sales-component/SalesMain.vue";
import logo from "@/assets/img/6cd5e4644bec4bd898ce4fd1e0433db2.png";
</script>

<template>
  <section class="commission">
    <header class="commission__header">
      <div class="commission__header-logo header__logo">
        <div class="header__logo-img">
          <img :src="logo" alt="logo" />
        </div>
        <h3 class="header__logo-title">Commission Calculator</h3>
      </div>
    </header>
    <SalesMain class="commission__sales" />
    <footer class="commission__footer"></footer>
  </section>
</template>

<style scoped lang="scss">
.commission__header,
.commission__footer {
  background-color: #3e3e3e;
  height: 15vh;
}

.commission {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  &__header {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 40px;
    .header__logo {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #af8ae2;
      &-img {
        width: 70px;
        height: 70px;
        margin-right: 20px;

        img {
          object-fit: contain;
          border-radius: 50%;
          width: inherit;
          height: inherit;
        }
      }
    }
  }

  &__sales {
    flex-grow: 1;
  }
}
</style>
