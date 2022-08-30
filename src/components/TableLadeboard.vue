<template>
  <div
    class="container mx-auto flex justify-center items-center flex-col gap-4 mt-4"
  >
    <h1 class="text-xl md:text-2xl font-bold transition-all">
      Tabla de posiciones
    </h1>
    <table
      class="border-2 text-center border-gray-300 drop-shadow-lg w-screen text-sxs sm:text-sm md:text-base md:w-auto rounded-2xl"
    >
      <thead>
        <tr>
          <th class="main-row">Name</th>
          <th class="main-row">Elo</th>
          <th class="main-row">Victories</th>
          <th class="main-row">Defeats</th>
          <th class="main-row">Non Shows</th>
        </tr>
      </thead>

      <tbody>
        <tr class="row" v-for="player in playersData" :key="player.id">
          <td class="element-row">
            {{ player.name }}
          </td>
          <td class="element-row">
            {{ player.elo }}
          </td>
          <td class="element-row">
            {{ player.victories }}
          </td>
          <td class="element-row">
            {{ player.defeats }}
          </td>
          <td class="element-row">
            {{ player.non_shows }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import getPlayers from "../fetchAPI.js";
const playersData = ref([]);

onMounted(async () => {
  const players = await getPlayers();
  playersData.value = players;
});
</script>
