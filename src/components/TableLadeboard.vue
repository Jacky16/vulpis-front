<template>
  <div class="container mx-auto flex justify-center">
    <table
      class="table-fixed my-8 border-2 text-center border-gray-300 drop-shadow-lg w-screen text-sxs sm:text-sm md:text-base md:w-auto"
    >
      <thead>
        <tr>
          <th class="py-2 px-4 bg-blue-500 text-white">Name</th>
          <th class="py-2 px-4 bg-blue-500 text-white">Elo</th>
          <th class="py-2 px-4 bg-blue-500 text-white">Victories</th>
          <th class="py-2 px-4 bg-blue-500 text-white">Defeats</th>
          <th class="py-2 px-4 bg-blue-500 text-white">Non Shows</th>
        </tr>
      </thead>

      <tbody>
        <tr
          class="text-black bg-slate-100 hover:bg-blue-400 hover:text-white hover:w-4 transition-all duration-300 h-4 ease-in-out"
          v-for="player in playersData"
          :key="player.id"
        >
          <td class="p-4">
            {{ player.attributes.name }}
          </td>
          <td class="p-4">
            {{ player.attributes.elo }}
          </td>
          <td class="p-4">
            {{ player.attributes.victories }}
          </td>
          <td class="p-4">
            {{ player.attributes.defeats }}
          </td>
          <td class="p-4">
            {{ player.attributes.non_shows }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
const playersData = ref([]);

onMounted(async () => {
  const response = await fetch("http://localhost:1337/api/players");
  const data = await response.json();
  playersData.value = data.data;
});
</script>
