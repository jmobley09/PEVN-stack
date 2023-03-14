import { defineStore } from "pinia";

export const useCustomerStore = defineStore("customer", () => {
  const count = ref(0);
  const name = ref("Eduardo");

  return { count, name };
});
