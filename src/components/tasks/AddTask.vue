<!-- AddTask.vue -->
<template>
    <div>
      <h2>Ajouter une Tâche</h2>
      <form @submit.prevent="addTask">
        <div class="mb-3">
          <label for="nom" class="form-label">Nom</label>
          <input v-model="nom" type="text" class="form-control" id="nom" required>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <input v-model="description" type="text" class="form-control" id="description" required>
        </div>
        <div class="mb-3">
          <label for="dateDebut" class="form-label">Date de début</label>
          <input v-model="dateDebut" type="date" class="form-control" id="dateDebut" required>
        </div>
        <div class="mb-3">
          <label for="dateFin" class="form-label">Date de fin</label>
          <input v-model="dateFin" type="date" class="form-control" id="dateFin" required>
        </div>
        <div class="mb-3">
        <label for="projet" class="form-label">Projet</label>
        <select v-model="projet" class="form-control" id="projet" required>
          <option v-for="proj in projects" :key="proj.id" :value="proj.id">{{ proj.nom }}</option>
        </select>
      </div>
        <button type="submit" class="btn btn-primary">
          <i class="fas fa-check"></i> Ajouter
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { useGestionStore } from '@/stores/gestion';
  
  const nom = ref('');
  const description = ref('');
  const dateDebut = ref('');
  const dateFin = ref('');
  const projet = ref('');
  
  const store = useGestionStore();
  const projects = store.getProjects();
  const router = useRouter();
  
  const addTask = () => {
    console.log("Tentative d'ajout de tâche");
  
    const newTask = {
      id: Date.now().toString(),
      nom: nom.value,
      description: description.value,
      dateDebut: dateDebut.value,
      dateFin: dateFin.value,
      projet: projet.value,
    };
    store.addTask(newTask);
    router.push('/tasks');
  };
  </script>
  