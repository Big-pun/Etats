<template>
    <div class="container mx-auto p-4 bg-slate-700">
        <nav class="flex justify-around items-center">
            <RouterLink to="/">
                <img src="@/assets/EsportLogo.png" alt="eSport logo" class="max-w-16 rounded-lg opacity-70">
            </RouterLink>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/teams">Teams</RouterLink>
            <RouterLink to="/addteam">Add Team</RouterLink>
        </nav>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>

<style scoped></style>