<template>
    <div>
        <Table></Table>
    </div>
    <p>
        {{ customerData }}
    </p>
</template>

<script setup>
import { useCustomerStore } from '@/stores/customers';
import { storeToRefs } from 'pinia';
import Table from '@/components/table.vue';
import { onMounted } from 'vue'


const store = useCustomerStore();
const { customerData } = storeToRefs(store);

onMounted(() => {
    store.getCustomers();
});
</script>