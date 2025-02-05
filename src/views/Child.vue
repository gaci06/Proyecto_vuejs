<template>
    <div>
      <p>{{ mensaje }}</p>
      <button @click="enviarRespuesta">Enviar Respuesta</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  
  // Definir la prop 'mensaje' de tipo string
  defineProps<{ mensaje: string }>();
  
  // Emitir el evento 'respuesta' con un mensaje
  const emit = defineEmits<{
    (event: 'respuesta', value: string): void;
  }>();
  
  const enviarRespuesta = () => {
    emit('respuesta', '¡Mensaje recibido desde el HIJO!');
  };
  </script>
  