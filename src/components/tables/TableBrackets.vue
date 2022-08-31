<template>
  <div>
    <div class="flex justify-center items-center flex-col gap-4 mt-4">
      <h1 class="text-xl md:text-2xl font-bold transition-all">
        Tabla de aspirantes
      </h1>
      <Load v-if="!isResponse.ok" :response="isResponse" />
      <table
        class="table-fixed border-2 text-center border-gray-300 drop-shadow-lg w-screen text-sxs sm:text-sm md:text-base md:w-auto rounded-2xl"
        v-else
      >
        <thead>
          <tr>
            <th class="main-row text-center" v-for="column in columns">
              {{ column }}
            </th>
          </tr>
        </thead>

        <thead>
          <tr
            :v-if="playersInBrackets.length >= 8"
            class="row"
            v-for="(player, index) in playersInBrackets"
            :key="player.name"
          >
            <td>{{ index + 1 }}</td>
            <td class="element-row" v-for="play in player">
              {{ play.name }}
            </td>
            <td>{{ bracketsData[index].mediumElo }}</td>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { getBrackets } from "./../../fetchAPI.js";
import Load from "../Load.vue";

const bracketsData = ref([]);
const playersInBrackets = ref();
const isResponse = ref({});

const columns = [
  "Posicion",
  "Jugador 1",
  "Jugador 2",
  "Jugador 3",
  "Jugador 4",
  "Jugador 5",
  "Jugador 6",
  "Jugador 7",
  "Jugador 8",
  "Elo Medio",
];
onMounted(async () => {
  const { data, res } = await getBrackets();
  if (data != null) playersInBrackets.value = data.map((el) => el.players);
  isResponse.value = res;
});
</script>
