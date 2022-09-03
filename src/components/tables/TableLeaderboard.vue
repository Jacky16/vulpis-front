<template>
  <div
    class="container mx-auto flex justify-center items-center flex-col gap-4 mt-4"
  >
    <h1 class="text-xl md:text-2xl font-bold transition-all">
      Tabla de posiciones
    </h1>
    <Load v-if="!isResponse.ok" :response="isResponse" />
    <table
      class="table-auto border-2 text-center border-gray-300 drop-shadow-lg w-screen text-sxs sm:text-sm md:text-base md:w-auto rounded-2xl"
      v-else
    >
      <thead>
        <tr>
          <th class="main-row">Posición</th>
          <th class="main-row">Nombre</th>
          <th class="main-row">Elo</th>
          <th class="main-row">Victorias</th>
          <th class="main-row">Derrotas</th>
          <th class="main-row">Non Shows</th>
        </tr>
      </thead>

      <tbody>
        <tr class="row" v-for="(player, index) in playersData" :key="player.id">
          <td class="element-row">
            {{ index + 1 }}
          </td>
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
import { getPlayers } from "./../../fetchAPI.js";
import Load from "../Load.vue";
const playersData = ref([]);
let isResponse = ref("");
onMounted(async () => {
  const { data, res } = await getPlayers();
  playersData.value = data;
  isResponse.value = res;
});
</script>
