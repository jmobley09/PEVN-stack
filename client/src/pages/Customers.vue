<template>
    <p>
        {{ name }}
    </p>
</template>

<script setup>
import { useCustomerStore } from '@/stores/customers';
import { storeToRefs } from 'pinia';
 
const store = useCustomerStore();
const { name } = storeToRefs(store);
</script>