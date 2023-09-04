<script setup>
import { ref } from 'vue'
import { useCounterStore } from './stores/counter'
import { storeToRefs } from 'pinia';

const counterStore = useCounterStore()
const { count, double } = storeToRefs(counterStore)
</script>

<template>
  <button @click="counterStore.increment">{{ count }} - {{ double }}</button>
</template>