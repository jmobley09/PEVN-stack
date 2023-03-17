<template>
    <div>
        <Table></Table>
    </div>
    <p>
        {{ name }}
    </p>
</template>

<script setup>
import { useCustomerStore } from '@/stores/customers';
import { storeToRefs } from 'pinia';
import Table from '@/components/table.vue';
 
const store = useCustomerStore();
const { name } = storeToRefs(store);
</script>