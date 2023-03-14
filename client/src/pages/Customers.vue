<template>
    <p>
        {{ store.name }}
    </p>
</template>

<script setup>
import { userCustomerStore } from '@/stores/customer';

const store = userCustomerStore();
</script>