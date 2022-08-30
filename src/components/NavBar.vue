<template>
  <nav
    class="bg-blue-500 h-14 flex justify-center items-center rounded-b-sm drop-shadow-lg"
  >
    <ul class="flex md:gap-8">
      <li
        class="p-2 rounded-md hover:bg-blue-700 text-white"
        v-for="item in menuItems"
        :key="item.name"
      >
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script setup>
const menuItems = [
  {
    name: "Ladeboard",
    path: "/",
  },
  {
    name: "Aspirantes",
    path: "/aspirantes",
  },
  {
    name: "Historial",
    path: "/historial",
  },
];
</script>
