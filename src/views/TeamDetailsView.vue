<template>
  <div>
    <h1>{{  team.nom }}</h1>
  </div>
</template>

<script setup>
import { useTeamsStore } from '@/stores/teams'
import { useRoute } from 'vue-router';

const teamsStore = useTeamsStore()
const route = useRoute();
const team = teamsStore.getTeamById(route.params.teamsId)

</script>

<style scoped>

</style>