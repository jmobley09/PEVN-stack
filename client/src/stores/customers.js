import { defineStore } from "pinia";
import { ref } from "vue";

export const useCustomerStore = defineStore("customer", () => {
  const count = ref(0);
  const name = ref("Eduardo");

  return { count, name };
});
