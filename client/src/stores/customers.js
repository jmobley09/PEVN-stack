import { defineStore } from "pinia";
import axios from 'axios';


export const useCustomerStore = defineStore("customer", {
  state: () => {
    return {
      customerData: null,
    };
  },
  actions: {
    async getCustomers() {
      const url = `${import.meta.env.VITE_BASE_URL}/customers`;
      try {
        await axios.get(url)
          .then((response) => {
            this.customerData = response.data;
          })
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    listCustomers(state) {
      return state.data;
    }
  },
});
