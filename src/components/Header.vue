<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/page2">Página 2</router-link>
      <router-link to="/page3">Página 3</router-link>
      <router-link to="/page4">Página 4</router-link>
      <router-link to="/page5">Página 5</router-link>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  padding: 1rem;
  background-color: #42b883;
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav a.router-link-active {
  text-decoration: underline;
}
</style>
