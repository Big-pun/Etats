<template>
  <div>
    <h1 class="text-3xl font-bold text-center drop-shadow-xl mb-8">League's Teams</h1>
    <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <li v-for="team in teams" :key="team.idEquipe" class="mx-auto p-4 bg-slate-900 rounded-lg shadow-md">
        <RouterLink :to="'/teams/' + team.idEquipe" class="flex flex-col items-center space-x-2">
          <img :src="team.logo" alt="team logo" width="75" height="75" />
          {{ team.nom }}
        </RouterLink>
      </li>
    </ul>

    <RouterLink :to="`/addteam`" class=" block mx-auto w-fit mt-8 p-4 text-center bg-slate-900 rounded-lg shadow-md">
      Add a team
    </RouterLink>
    <router-view />
  </div>
</template>

<script setup>
  import { useTeamsStore } from "@/stores/teams";
import AddTeamView from "./AddTeamView.vue";


  const teamsStore = useTeamsStore();
  const teams = teamsStore.teams;


</script>

<style scoped>
  /* Ajoutez vos styles ici */
</style>
