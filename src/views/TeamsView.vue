<template>
  <div>
    <h1>Teams</h1>
    <ul>
      <li v-for="team in teams" :key="team.idEquipe">
        <RouterLink :to="'/teams/' + team.idEquipe">
          <img :src="team.logo" alt="team logo" width="50" height="50" />
          {{ team.nom }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useTeamsStore } from '@/stores/teams'

const teamsStore = useTeamsStore()
const teams = teamsStore.teams
</script>

<style scoped>
/* Ajoutez vos styles ici */
</style>