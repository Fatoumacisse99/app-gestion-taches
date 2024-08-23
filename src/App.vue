<!-- App.vue -->
  <template>
    <div id="app">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <router-link class="navbar-brand fw-bold" to="/">Gestion des Tâches et projet</router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <router-link class="nav-link text-light" to="/tasks">Tâches</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-light" to="/">Projets</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      <main class="container my-5">
        <router-view class="mt-5"/>
      </main>
  
      <footer class="text-center text-muted py-5">
        <small>&copy; 2024 Gestion des Tâches. Tous droits réservés.</small>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    console.log('App mounted');
  });
  </script>
  
  <style>
  @import "bootstrap/dist/css/bootstrap.min.css";
  
  #app {
    font-family: 'Poppins', Arial, sans-serif;
    color: #343a40;
  }
  
  .navbar {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .navbar-brand {
    font-size: 1.5rem;
  }
  
  .navbar-nav .nav-link {
    font-size: 1.1rem;
  }
  
  main.container {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  footer {
    background-color: #f8f9fa;
    margin-top: 20px;
    border-top: 1px solid #e9ecef;
  }
  </style>
  
  