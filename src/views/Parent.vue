<template>
    <div>
      <h2>Componente Padre</h2>
      <Child mensaje="Hola desde el padre" @respuesta="manejarRespuesta" />
      <p v-if="respuesta">Respuesta del hijo: {{ respuesta }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import Child from './Child.vue';
    
  // Variable reactiva para almacenar la respuesta del hijo
  const respuesta = ref<string | null>(null);
  
  // Función para manejar el evento 'respuesta'
  const manejarRespuesta = (mensaje: string) => {
    respuesta.value = mensaje;
  };
  </script>
  