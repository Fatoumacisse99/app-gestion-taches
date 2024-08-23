// gestion.js
import { defineStore } from 'pinia';

export const useGestionStore = defineStore('gestion', {
  state: () => ({
    projets:  [{ id: '1', nom: 'Projet 1', dateDebut: '2024-08-01', dateFin: '2024-08-10' },
        { id: '2', nom: 'Projet 2', dateDebut: '2024-08-15', dateFin: '2024-08-20' }],
        
      

    tasks: [],
    
  }),
  actions: {
    
    ajouterProjet(projet) {
      this.projets.push(projet);
    },
    supprimerProjet(id) {
      this.projets = this.projets.filter(projet => projet.id !== id);
    },
      modifierProjet(id, projetModifie) {
      const index = this.projets.findIndex(projet => projet.id === id);
      if (index !== -1) {
        this.projets[index] = { ...this.projets[index], ...projetModifie };
      }
    },
    detailProjet(id) {
     return this.projets.find(projet => projet.id === id);
          
    },
    

    getProjetById(id) {
      return this.projets.find(projet => projet.id === id);
    },
    addTask(task) {
      this.tasks.push(task);
    },
    updateTask(updatedTask) {
      const index = this.tasks.findIndex(t => t.id === updatedTask.id);
      if (index !== -1) this.tasks[index] = updatedTask;
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
    getTaskById(taskId) {
      return this.tasks.find(task => task.id === taskId);
    },
    addProject(project) {
      this.projets.push(project);
    },
    getProjects() {
      return this.projets;
    },
    },
    });
