<!-- <template>
    <div>
      <h2>Liste des Tâches</h2>
      <router-link to='/add-task' class="btn btn-primary mb-3">
        <i class="fas fa-plus"></i> Ajouter une tâche
      </router-link>
      <table class="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Date de début</th>
            <th>Date de fin</th>
            <th>Projet</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{ task.nom }}</td>
            <td>{{ task.description }}</td>
            <td>{{ task.dateDebut }}</td>
            <td>{{ task.dateFin }}</td>
            <td>{{ task.projet }}</td>
            <td>
              <router-link :to="{ name: 'TaskDetails', params: { id: task.id } }" class="btn btn-info">
                <i class="fas fa-eye"></i> Voir
              </router-link>
              <router-link :to="{ name: 'EditTask', params: { id: task.id } }" class="btn btn-warning">
                <i class="fas fa-edit"></i> Modifier
              </router-link>
              <button @click="deleteTask(task.id)" class="btn btn-danger">
                <i class="fas fa-trash"></i> Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { useGestionStore } from '@/stores/gestion';

  const store = useGestionStore();
  const tasks = store.tasks;
  
  const deleteTask = (id) => {
    console.log("Tache supprime avec succe")
    store.deleteTask(id);
  };
  </script> -->
  <template>
    <div>
      <h2>Liste des Tâches</h2>
      <router-link to='/add-task' class="btn btn-primary mb-3">
        <i class="fas fa-plus"></i> Ajouter une tâche
      </router-link>
      <table class="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Date de début</th>
            <th>Date de fin</th>
            <th>Projet</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{ task.nom }}</td>
            <td>{{ task.description }}</td>
            <td>{{ task.dateDebut }}</td>
            <td>{{ task.dateFin }}</td>
            <td>{{ task.projet }}</td>
            <td>
              <router-link :to="{ name: 'TaskDetails', params: { id: task.id } }" class="btn btn-info">
                <i class="fas fa-eye"></i> Voir
              </router-link>
              <router-link :to="{ name: 'EditTask', params: { id: task.id } }" class="btn btn-warning">
                <i class="fas fa-edit"></i> Modifier
              </router-link>
              <button @click="deleteTask(task.id)" class="btn btn-danger">
                <i class="fas fa-trash"></i> Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useGestionStore } from '@/stores/gestion';
  
  const store = useGestionStore();
  const tasks = computed(() => store.tasks);
  
  const deleteTask = (id) => {
    store.deleteTask(id);
  };
  </script>
   
   