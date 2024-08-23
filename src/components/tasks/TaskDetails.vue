TaskDetail.
<template>
  <div>
    <h2>Détails de la Tâche</h2>
    <p><strong>Nom:</strong> {{ task.nom }}</p>
    <p><strong>Description:</strong> {{ task.description }}</p>
    <p><strong>Date de début:</strong> {{ task.dateDebut }}</p>
    <p><strong>Date de fin:</strong> {{ task.dateFin }}</p>
    <p><strong>Projet:</strong> {{ task.projet }}</p>
    <router-link :to="{ name: 'TaskList' }" class="btn btn-secondary">
      <i class="fas fa-arrow-left"></i> Retour
    </router-link>
  </div>
</template>

  
  <script setup>
  import { useGestionStore} from '@/stores/gestion';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const store = useGestionStore();
  const task = store.getTaskById(route.params.id);
  </script>
  