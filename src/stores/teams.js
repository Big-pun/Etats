import { ref } from "vue";
import { defineStore } from "pinia";
import BlazeGunners from "@/assets/Blaze-Gunners.jpeg";
import ThunderBolts from "@/assets/Thunder-Bolts.jpeg";
import ShadowHunters from "@/assets/Shadow-Hunters.jpeg";
import Guardians from "@/assets/Guardians.jpeg";
import Avengers from "@/assets/Avengers.jpeg";
import XMen from "@/assets/X-men.jpeg";

export const useTeamsStore = defineStore("teams", () => {
  const teams = ref([
    {
      idEquipe: "1",
      nom: "Blaze-Gunners",
      logo: BlazeGunners,
      joueurs: [
        { idJoueur: 1, nomJoueur: "Johnny Blaze" },
        { idJoueur: 2, nomJoueur: "Sarah Connor" },
        { idJoueur: 3, nomJoueur: "Ellen Ripley" },
        { idJoueur: 4, nomJoueur: "John Wick" },
        { idJoueur: 5, nomJoueur: "Lara Croft" },
      ],
    },
    {
      idEquipe: "2",
      nom: "Thunderbolts",
      logo: ThunderBolts,
      joueurs: [
        { idJoueur: 6, nomJoueur: "Bruce Wayne" },
        { idJoueur: 7, nomJoueur: "Clark Kent" },
        { idJoueur: 8, nomJoueur: "Diana Prince" },
        { idJoueur: 9, nomJoueur: "Barry Allen" },
        { idJoueur: 10, nomJoueur: "Arthur Curry" },
      ],
    },
    {
      idEquipe: "3",
      nom: "Shadowhunters",
      logo: ShadowHunters,
      joueurs: [
        { idJoueur: 11, nomJoueur: "Jace Herondale" },
        { idJoueur: 12, nomJoueur: "Clary Fray" },
        { idJoueur: 13, nomJoueur: "Simon Lewis" },
        { idJoueur: 14, nomJoueur: "Isabelle Lightwood" },
        { idJoueur: 15, nomJoueur: "Alec Lightwood" },
      ],
    },
    {
      idEquipe: "4",
      nom: "Guardians",
      logo: Guardians,
      joueurs: [
        { idJoueur: 16, nomJoueur: "Peter Quill" },
        { idJoueur: 17, nomJoueur: "Gamora" },
        { idJoueur: 18, nomJoueur: "Drax" },
        { idJoueur: 19, nomJoueur: "Rocket" },
        { idJoueur: 20, nomJoueur: "Groot" },
      ],
    },
    {
      idEquipe: "5",
      nom: "Avengers",
      logo: Avengers,
      joueurs: [
        { idJoueur: 21, nomJoueur: "Tony Stark" },
        { idJoueur: 22, nomJoueur: "Steve Rogers" },
        { idJoueur: 23, nomJoueur: "Thor" },
        { idJoueur: 24, nomJoueur: "Natasha Romanoff" },
        { idJoueur: 25, nomJoueur: "Bruce Banner" },
      ],
    },
    {
      idEquipe: "6",
      nom: "X-Men",
      logo: XMen,
      joueurs: [
        { idJoueur: 26, nomJoueur: "Logan" },
        { idJoueur: 27, nomJoueur: "Charles Xavier" },
        { idJoueur: 28, nomJoueur: "Jean Grey" },
        { idJoueur: 29, nomJoueur: "Scott Summers" },
        { idJoueur: 30, nomJoueur: "Ororo Munroe" },
      ],
    },
  ]);

  function addTeam(team) {
    teams.value.push(team);
  }

  function getTeamById(teamId) {
    return teams.value.find((team) => team.idEquipe === teamId);
  }

  return { teams, addTeam, getTeamById };
});
