<template>
  <div v-if="projet">
    <h2>Détails du Projet</h2>
    <p><strong>Nom:</strong> {{ projet.nom }}</p>
    <p><strong>Date de Début:</strong> {{ projet.dateDebut }}</p>
    <p><strong>Date de Fin:</strong> {{ projet.dateFin }}</p>
    <router-link to="/" class="btn btn-primary">Retour à la liste des projets</router-link>
  </div>
  <div v-else>
    <p>Projet non trouvé.</p>
    <router-link to="/" class="btn btn-primary">Retour à la liste des projets</router-link>
  </div>
</template>

<script>
import { useGestionStore } from '@/stores/gestion';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const store = useGestionStore();
    const route = useRoute();
    const projet = computed(() => store.detailProjet(route.params.id));

    return { projet };
  },
};
</script>
