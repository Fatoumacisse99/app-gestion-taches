<template>
    <div>
      <h2>Modifier la Tâche</h2>
      <form @submit.prevent="updateExistingTask">
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
        <button type="submit" class="btn btn-primary">Enregistrer</button>
      </form>
    </div>
  </template>
  
  <script>
  import { useGestionStore } from '../store/gestion';
  import { onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  export default {
    setup() {
      const store = useGestionStore();
      const route = useRoute();
      const router = useRouter();
  
      const nom = ref('');
      const description = ref('');
      const dateDebut = ref('');
      const dateFin = ref('');
  
      onMounted(() => {
        const task = store.getTaskById(route.params.id);
        if (task) {
          nom.value = task.nom;
          description.value = task.description;
          dateDebut.value = task.dateDebut;
          dateFin.value = task.dateFin;
        } else {
          router.push('/');
        }
      });
  
      const updateExistingTask = () => {
        const updatedTask = {
          id: route.params.id,
          nom: nom.value,
          description: description.value,
          dateDebut: dateDebut.value,
          dateFin: dateFin.value
        };
        store.updateTask(updatedTask);
        router.push('/');
      };
  
      return { nom, description, dateDebut, dateFin, updateExistingTask };
    }
  };
  </script>
  