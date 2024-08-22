<template>
  <div>
    <h2>Ajouter un Projet</h2>
    <form @submit.prevent="ajouterProjet">
      <div class="form-group">
        <label for="nom">Nom du Projet</label>
        <input type="text" v-model="nom" class="form-control" id="nom" required>
      </div>
      <div class="form-group">
        <label for="dateDebut">Date de Début</label>
        <input type="date" v-model="dateDebut" class="form-control" id="dateDebut" required>
      </div>
      <div class="form-group">
        <label for="dateFin">Date de Fin</label>
        <input type="date" v-model="dateFin" class="form-control" id="dateFin" required>
      </div>
      <button type="submit" class="btn btn-success mt-3">Ajouter</button>
    </form>
  </div>
</template>

<script>
import { useGestionStore } from '@/stores/gestion';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useGestionStore();
    const router = useRouter();
    const nom = ref('');
    const dateDebut = ref('');
    const dateFin = ref('');

    const ajouterProjet = () => {
      store.ajouterProjet({ id: Date.now(), nom: nom.value, dateDebut: dateDebut.value, dateFin: dateFin.value });
      router.push('/');
    };

    return { nom, dateDebut, dateFin, ajouterProjet };
  },
};
</script>
