<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Tareas' }">Tareas</router-link> |
    <router-link :to="{ name: 'Peliculas' }">Películas</router-link>
  </div>
</template>

<script>
export default {
  name: "TheNavigation",
};
</script>

<style scoped>

    #nav {
    padding: 30px;
    margin-bottom: 20px;
    }

    #nav a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 20px;
    }

    #nav a.router-link-exact-active {
    color: #42b983;
    }
</style>