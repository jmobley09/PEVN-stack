<template>
  <div id="nav" class="flex">
    <NavMenu class="h-screen bg-base-200" />
    <div class="flex flex-col">
      <NavBar class="w-screen"/>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import NavMenu from "./components/NavMenu.vue";
</script>

<style scoped></style>
