<template>
  <div>
    <h2>Modifier le Projet</h2>
    <form @submit.prevent="modifierProjet">
      <div class="form-group">
        <label for="nom">Nom du Projet</label>
        <input type="text" v-model="projet.nom" class="form-control" id="nom" required>
      </div>
      <div class="form-group">
        <label for="dateDebut">Date de Début</label>
        <input type="date" v-model="projet.dateDebut" class="form-control" id="dateDebut" required>
      </div>
      <div class="form-group">
        <label for="dateFin">Date de Fin</label>
        <input type="date" v-model="projet.dateFin" class="form-control" id="dateFin" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Enregistrer les modifications</button>
    </form>
  </div>
</template>

<script>
import { useGestionStore } from '@/stores/gestion';
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default {
  setup() {
    const store = useGestionStore();
    const router = useRouter();
    const route = useRoute();
    const projet = ref({});

    onMounted(() => {
      projet.value = store.getProjetById(route.params.id) || {};
    });

    const modifierProjet = () => {
      store.modifierProjet(route.params.id, projet.value);
      router.push('/');
    };

    return { projet, modifierProjet };
  },
};
</script>
