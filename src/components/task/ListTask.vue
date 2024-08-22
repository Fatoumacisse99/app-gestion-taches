<template>
    <div>
      <h2>Liste des Tâches</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Date de début</th>
            <th>Date de fin</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="tache in taches" :key="tache.id">
            <td>{{ tache.nom }}</td>
            <td>{{ tache.description }}</td>
            <td>{{ tache.dateDebut }}</td>
            <td>{{ tache.dateFin }}</td>
            <td>
              <router-link :to="{ name: 'EditTask', params: { id: tache.id } }" class="btn btn-primary">Modifier</router-link>
              <button @click="deleteTask(tache.id)" class="btn btn-danger">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { useGestionStore } from '../store/gestion';
  
  export default {
    setup() {
      const store = useGestionStore();
      const taches = store.taches;
  
      const deleteTask = (id) => {
        store.deleteTask(id);
      };
  
      return { taches, deleteTask };
    }
  };
  </script>
  