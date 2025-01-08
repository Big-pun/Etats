<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/teams">Teams</RouterLink>
        <RouterLink to="/addteam">Add Team</RouterLink>
      </nav>
    </div>
  </header>
  <main>


    <RouterView />
  </main>
</template>

<style scoped></style>
