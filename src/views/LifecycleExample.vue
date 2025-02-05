<template>
  <div>
    <h2>Ejemplo de Ciclo de Vida</h2>
    <p>Contador: {{ contador }}</p>
    <p>Estado: {{ estadoContador }}</p>
    <button @click="incrementar">Incrementar</button>
    <button @click="decrementar">Decrementar</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch, computed } from 'vue';

// Variable reactiva del contador
const contador = ref<number>(0);

// Computed para mostrar si el contador es positivo, negativo o cero
const estadoContador = computed(() => {
  if (contador.value > 0) return "Positivo";
  if (contador.value < 0) return "Negativo";
  return "Cero";
});

// onMounted: Ejecutado cuando el componente se monta
onMounted(() => {
  console.log('El componente ha sido montado.');
});

// onUnmounted: Ejecutado cuando el componente se desmonta
onUnmounted(() => {
  console.log('El componente ha sido desmontado.');
});

// Watch para observar cambios en el contador
watch(contador, (newValue) => {
  console.log(`El contador ha cambiado a: ${newValue}`);
});

// Función para incrementar el contador
const incrementar = () => {
  contador.value++;
};

// Función para decrementar el contador
const decrementar = () => {
  contador.value--;
};
</script>
