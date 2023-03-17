import { createWebHistory, createRouter } from "vue-router";
import Customer from '@/pages/Customers.vue';
import Contracts from "@/pages/Contracts.vue";
import Devices from "@/pages/Devices.vue";
import Home from '@/pages/Home.vue';
import NotFound from '@/pages/NotFound.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
  {
    path: "/customers",
    name: "customers",
    component: Customer,
  },
  {
    path: "/contracts",
    name: "contracts",
    component: Contracts,
  },
  {
    path: "/devices",
    name: "devices",
    component: Devices,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
