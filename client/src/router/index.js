import { createWebHistory, createRouter } from "vue-router";
import Customer from '@/pages/Customers.vue';
import Home from '@/pages/Home.vue';
import NotFound from '@/pages/NotFound.vue'

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
    component: Customer
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
