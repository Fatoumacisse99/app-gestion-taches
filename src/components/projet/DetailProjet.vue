<template>
    <div class="container mt-5">
      <h2>Détails du Projet</h2>
      <p><strong>Nom :</strong> {{ projet.nom }}</p>
      <p><strong>Date de Début :</strong> {{ projet.dateDebut }}</p>
      <p><strong>Date de Fin :</strong> {{ projet.dateFin }}</p>
  
      <h3>Tâches Associées</h3>
      <router-link :to="`/projets/${projet.id}/taches/ajouter`" class="btn btn-primary mb-3">Ajouter une Tâche</router-link>
      <ListeTaches :projet-id="projet.id" />
    </div>
  </template>
  
  <script setup>
  import { useProjetStore } from '../../stores/gestion';
  import { useRoute } from 'vue-router';
  import ListeTaches from '../tache/ListeTaches.vue';
  
  const route = useRoute();
  const projetStore = useProjetStore();
  
  const projet = projetStore.getProjetById(route.params.id);
  </script>
  