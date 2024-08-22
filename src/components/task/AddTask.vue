<template>
    <div>
      <h2>Ajouter une Tâche</h2>
      <form @submit.prevent="addNewTask">
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
        <button type="submit" class="btn btn-success">Ajouter</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useGestionStore } from '@/store/gestion';
  
  export default {
    setup() {
      const store = useGestionStore();
      const nom = ref('');
      const description = ref('');
      const dateDebut = ref('');
      const dateFin = ref('');
  
      const addNewTask = () => {
        const newTask = {
          id: Date.now().toString(),
          nom: nom.value,
          description: description.value,
          dateDebut: dateDebut.value,
          dateFin: dateFin.value
        };
        store.addTask(newTask);
      };
  
      return { nom, description, dateDebut, dateFin, addNewTask };
    }
  };
  </script>
  