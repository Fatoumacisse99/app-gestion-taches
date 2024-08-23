// index.js
import { createRouter, createWebHistory } from "vue-router";
import ListeProjet from "../components/projet/ListeProjet.vue";
import AjouterProjets from "../components/projet/AjouterProjets.vue";
import ModifierProjet from "../components/projet/ModifierProjet.vue";
import TaskList from '../components/tasks/TaskList.vue';
import TaskDetails from '../components/tasks/TaskDetails.vue';
import AddTask from '../components/tasks/AddTask.vue';
import EditTask from '../components/tasks/EditTask.vue';

const routes = [
  { path: "/", name: "ListeProjets", component: ListeProjet },
  { path: "/ajouter-projet", name: "AjouterProjet", component: AjouterProjets },
  {
    path: "/modifier-projet/:id",
    name: "ModifierProjet",
    component: ModifierProjet,
  },
  { path: '/', redirect: '/tasks', },
  { path: '/tasks', name: 'TaskList', component: TaskList },
  { path: '/tasks/:id', name: 'TaskDetails', component: TaskDetails, props: true },
  { path: '/add-task', name: 'AddTask', component: AddTask },
  { path: '/edit-task/:id', name: 'EditTask', component: EditTask, props: true },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
