<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="bg-slate-900 text-white">
    <header>
      <NavBar />
    </header>
    <main class="container mx-auto p-4 bg-slate-700 min-h-screen">


      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
