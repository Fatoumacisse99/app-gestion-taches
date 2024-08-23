<!-- EditTask.vue -->
<template>
    <div>
      <h2>Modifier la Tâche</h2>
      <form @submit.prevent="updateTask">
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
        <!-- <div class="mb-3">
          <label for="projet" class="form-label">Projet</label>
          <select v-model="projet" class="form-control" id="projet" required>
            <option v-for="proj in projects" :key="proj" :value="proj">{{ proj }}</option>
          </select>
        </div> -->
        <button type="submit" class="btn btn-primary">
          <i class="fas fa-check"></i> Mettre à jour
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { useGestionStore } from '@/stores/gestion';
  
  const route = useRoute();
  const router = useRouter();
  const store = useGestionStore();
  const task = store.getTaskById(route.params.id);
  
  const nom = ref(task.nom);
  const description = ref(task.description);
  const dateDebut = ref(task.dateDebut);
  const dateFin = ref(task.dateFin);
  const projet = ref(task.projet);
  
  const projects = store.getProjects();
  
  const updateTask = () => {
    const updatedTask = {
      id: task.id,
      nom: nom.value,
      description: description.value,
      dateDebut: dateDebut.value,
      dateFin: dateFin.value,
      projet: projet.value,
    };
    store.updateTask(updatedTask);
    router.push('/tasks');
  };
  </script>
  