import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Purchase from "../views/Purchase.vue";
import PurchaseCompleted from "../views/PurchaseCompleted.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/purchase",
    name: "Purchase",
    component: Purchase,
  },
  {
    path: "/purchase-completed",
    name: "PurchaseCompleted",
    component: PurchaseCompleted,
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
