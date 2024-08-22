import { createRouter, createWebHistory } from 'vue-router';
import ListeProjet from '../components/projet/ListeProjet.vue';
import AjouterProjets from '../components/projet/AjouterProjets.vue';
import ModifierProjet from '../components/projet/ModifierProjet.vue';
const routes = [
  { path: '/', name: 'ListeProjets', component: ListeProjet },
  { path: '/ajouter-projet', name: 'AjouterProjet', component: AjouterProjets },
  { path: '/modifier-projet/:id', name: 'ModifierProjet', component: ModifierProjet },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
