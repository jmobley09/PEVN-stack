import { defineStore } from "pinia";

export const useCustomerStore = defineStore("customer", {
  state: () => {
    return {
      name: "Ed",
    };
  },
});
