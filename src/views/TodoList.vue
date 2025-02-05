<template>
    <div>
      <h2>Lista de Tareas</h2>
      <input v-model="newTask" type="text" placeholder="Nueva tarea" />
      <button @click="addTask">Agregar</button>
  
      <ul>
        <li v-for="(task, index) in tasks" :key="index">{{ task }}</li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Lista reactiva de tareas
  const tasks = ref<string[]>([]);
  
  // Nueva tarea a agregar
  const newTask = ref<string>('');
  
  // Función para agregar una tarea a la lista
  const addTask = () => {
    if (newTask.value.trim() !== '') {
      tasks.value.push(newTask.value);
      newTask.value = ''; // Limpiar el input después de agregar
    }
  };
  </script>
  