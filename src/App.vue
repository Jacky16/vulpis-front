<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <div class="bg-gray-200 h-screen">
    <NavBar></NavBar>
    <div class="">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
