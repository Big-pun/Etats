import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTeamsStore = defineStore('teams', () => {
  const teams = ref([])

  function addTeam(team) {
    teams.value.push(team)
  }

  function getTeamById(teamId) {
    return teams.value.find(team => team.idEquipe === teamId)
  }

  return { teams, addTeam, getTeamById }
})