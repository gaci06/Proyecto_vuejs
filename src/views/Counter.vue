<template>
    <div>
      <h2>Contador</h2>
      <p>Valor: {{ count }}</p>
      <p>Estado: {{ estadoContador }}</p>
      <button @click="incrementar">Incrementar</button>
      <button @click="decrementar">Decrementar</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  
  // Declarar count como número reactivo
  const count = ref<number>(0);
  
  // Propiedad computada para determinar el estado del contador
  const estadoContador = computed(() => {
    if (count.value > 0) return "Positivo";
    if (count.value < 0) return "Negativo";
    return "Cero";
  });
  
  // Funciones para modificar el contador
  const incrementar = () => count.value++;
  const decrementar = () => count.value--;
  </script>
  