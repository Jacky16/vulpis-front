import { createRouter, createWebHistory } from "vue-router";
import Leaderboard from "@/views/LadeboardView.vue";
import HistorialView from "@/views/HistorialView.vue";
import AspirantesView from "@/views/AspirantesView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Leaderboard",
      component: Leaderboard,
    },
    {
      path: "/historial",
      name: "Historial",
      component: HistorialView,
    },
    {
      path: "/aspirantes",
      name: "Aspirantes",
      component: AspirantesView,
    },
  ],
});

export default router;
