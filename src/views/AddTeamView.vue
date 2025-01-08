<template>
    <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md text-black">
        <h1 class="text-2xl font-bold mb-6 text-center ">Add a Team to the League</h1>

        <form @submit.prevent="addTeam" class="space-y-4">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Team Name:</label>
                <input type="text" id="name" v-model="name" required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <p v-if="errors.value && errors.value.name" class="text-red-500 text-sm">{{ errors.value.name }}</p>
            </div>

            <div>
                <label for="logo" class="block text-sm font-medium text-gray-700">Team Logo URL:</label>
                <input type="text" id="logo" v-model="logo" required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <p v-if="errors.value && errors.value.logo" class="text-red-500 text-sm">{{ errors.value.logo }}</p>
            </div>

            <div>
                <label for="players" class="block text-sm font-medium text-gray-700">Team Players (comma
                    separated):</label>
                <input type="text" id="players" v-model="players" required
                    class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                <p v-if="errors.value && errors.value.players" class="text-red-500 text-sm">{{ errors.value.players }}</p>
            </div>

            <button type="submit"
                class="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Add Team
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTeamsStore } from '@/stores/teams';
import { useRouter } from 'vue-router';

const teamsStore = useTeamsStore();
const router = useRouter();

const name = ref('');
const logo = ref('');
const players = ref('');
const errors = ref({
    name: null,
    logo: null,
    players: null,
});

function addTeam() {
    errors.value = {}; // Reset errors

    if (!name.value) {
        errors.value.name = 'Team name is required';
    }
    if (!logo.value) {
        errors.value.logo = 'Team logo is required';
    }
    if (!players.value) {
        errors.value.players = 'Team players are required';
    }

    if (Object.keys(errors.value).length === 0) {
        const newTeam = {
            idEquipe: Date.now().toString(),
            nom: name.value,
            logo: logo.value,
            joueurs: players.value.split(',').map((player, index) => ({
                idJoueur: index.toString(),
                nomJoueur: player.trim(),
            })),
        };
        teamsStore.addTeam(newTeam);
        name.value = '';
        logo.value = '';
        players.value = '';
        router.push('/teams');
    }
}
</script>

