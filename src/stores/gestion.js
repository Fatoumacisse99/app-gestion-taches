import { defineStore } from 'pinia';

export const useGestionStore = defineStore('gestion', {
  state: () => ({
    projets: [],
    
  }),
  actions: {
    // Projets
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
    getProjetById(id) {
      return this.projets.find(projet => projet.id === id);
    },
   }
});
