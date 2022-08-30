<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar></NavBar>
  <div class="container mx-auto"><router-view></router-view></div>
</template>
