<template>
  <div>
    <h2>Liste des Projets</h2>
    <router-link to="/ajouter-projet" class="btn btn-primary mb-3">Ajouter un Projet</router-link>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Nom</th>
          <th scope="col">Date de début</th>
          <th scope="col">Date de fin</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projet in projets" :key="projet.id">
          <td>{{ projet.nom }}</td>
          <td>{{ projet.dateDebut }}</td>
          <td>{{ projet.dateFin }}</td>
          <td>
            <router-link :to="'/modifier-projet/' + projet.id" class="btn btn-warning btn-sm">Modifier</router-link>
            <button @click="supprimerProjet(projet.id)" class="btn btn-danger btn-sm">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useGestionStore } from '@/stores/gestion';
import { computed } from 'vue';

export default {
  setup() {
    const store = useGestionStore();
    const projets = computed(() => store.projets);

    const supprimerProjet = (id) => {
      store.supprimerProjet(id);
    };

    return { projets, supprimerProjet };
  },
};
</script>
