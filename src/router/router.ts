import { createRouter, createWebHistory } from "vue-router";
import SalesTeam from "@/views/Sales.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Sales Team",
      component: SalesTeam,
    },
  ],
});

export default router;
