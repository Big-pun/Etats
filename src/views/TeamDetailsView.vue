<template>
  <div class="flex flex-col items-center space-y-4">
    <h1 class="text-3xl font-bold drop-shadow-xl ">{{ team.nom }}</h1>
    <img :src="team.logo" alt="team logo" width="200" height="200" class="p-4 bg-white rounded-3xl border-2 border-slate-900 shadow-2xl"/>
    <ul>
      <h2 class="font-bold drop-shadow-xl">Team's Players :</h2>
      <li v-for="player in team.joueurs" :key="player.idJoueur" class="font-thin">{{ player.nomJoueur }}</li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useTeamsStore } from '@/stores/teams'

const route = useRoute()
const teamsStore = useTeamsStore()
const team = teamsStore.getTeamById(route.params.teamId)
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>