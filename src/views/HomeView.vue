<template>
  <div class="bg-slate-900">
    <div class="container mx-auto p-4 bg-slate-700">
      <H1>Bonne année</H1>
      <div>
        <button @click="plus">+</button>
        <span>{{ count }}</span>
        <button @click="minus">-</button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';

const count = ref(0);
const counterStore = useCounterStore();

const plus = () => {
  counterStore.increment();
};

const minus = () => {
  counterStore.decrement();
};

</script>

<style scoped></style>