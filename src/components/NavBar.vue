<template>
    <div class="container mx-auto p-4 bg-slate-700">
        <nav class="flex justify-around">
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