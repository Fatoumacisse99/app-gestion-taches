<template>
    <div class="container mt-4">
      <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <a class="navbar-brand" href="#">Gestion des Tâches et Projets</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Projets</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/taches">Tâches</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <router-view />
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
  };
  </script>
  
  <style>
  /* Ajoutez ici des styles globaux ou spécifiques */
  </style>
  