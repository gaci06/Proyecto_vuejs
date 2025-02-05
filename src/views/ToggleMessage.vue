<template>
    <div>
      <button @click="toggleMensaje">Toggle</button>
      <p v-if="mostrarMensaje">¡Hola, Vue!</p>
    </div>
  </template>
  

  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const mostrarMensaje = ref(true);
  
  const toggleMensaje = () => {
    mostrarMensaje.value = !mostrarMensaje.value;
  };
  </script>
  