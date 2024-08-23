
# Gestion des Tâches et des Projets

## Description

Cette application web de gestion des tâches et des projets est construite avec Vue.js 3 en utilisant la Composition API. Elle permet de gérer des tâches et des projets, avec une gestion des états via Pinia et une navigation entre les différentes sections (Tâches, Projets) grâce à Vue Router. L'interface utilisateur est stylée avec Bootstrap pour une expérience utilisateur moderne et responsive.


## Prérequis

Avant de commencer, assurez-vous d'avoir les outils suivants installés sur votre machine :

- **Node.js** : [Télécharger Node.js](https://nodejs.org/)
- **vue.js**


## Installation et Utilisation

### Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/username/gestion-taches-projets.


cd gestion-taches-projets





2. Installez les dépendances :



bash

    npm install

3. Lancez l'application :

bash

    npm run serve

4. Ouvrez votre navigateur et accédez à http://localhost:8080.



## Fonctionnalités

### Tâches

- **Ajouter une nouvelle tâche** : Créez une nouvelle tâche avec les attributs nécessaires.
- **Lister toutes les tâches** : Affichez une liste de toutes les tâches dans un tableau.
- **Voir les détails d'une tâche** : Consultez les détails spécifiques d'une tâche sélectionnée.
- **Mettre à jour les informations d'une tâche** : Modifiez les détails d'une tâche existante.
- **Supprimer une tâche** : Supprimez une tâche de la liste.

### Projets

- **Ajouter un nouveau projet** : Créez un nouveau projet avec les informations pertinentes.
- **Lister tous les projets** : Affichez une liste de tous les projets dans un tableau.
- **Voir les détails d'un projet** : Consultez les détails spécifiques d'un projet sélectionné.
- **Mettre à jour les informations d'un projet** : Modifiez les détails d'un projet existant.
- **Supprimer un projet** : Supprimez un projet de la liste.

## Attributs des Tâches

- **Nom** : Le nom de la tâche.
- **Description** : Une description détaillée de la tâche.
- **Date de début** : La date à laquelle la tâche commence.
- **Date de fin** : La date à laquelle la tâche est prévue pour se terminer.
- **Projet** : Le projet auquel la tâche est associée (sélectionné parmi les projets existants).

## Attributs des Projets

- **Nom** : Le nom du projet.
- **Date de début** : La date à laquelle le projet commence.
- **Date de fin** : La date à laquelle le projet est prévu pour se terminer.

## Technologies Utilisées

- **Vue.js 3** : Framework JavaScript moderne pour la création d'interfaces utilisateur interactives.
- **Vue Router** : Gestionnaire de navigation pour Vue.js, utilisé pour naviguer entre les sections Tâches et Projets.
- **Pinia** : Gestionnaire d'états pour Vue.js, utilisé pour gérer l'état global des tâches et des projets.
- **Bootstrap** : Framework CSS pour un design responsive et moderne.

## Author

