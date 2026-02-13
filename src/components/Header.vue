<template>
  <header class="header">
    <img class="banner" src="/banner.png" alt="banner da loja">
    <nav class="nav">
      <router-link to="/">Inicio</router-link>
      <router-link to="/produtos">Produtos</router-link>
      <router-link to="/carrinho">Carrinho</router-link>
      <router-link to="/sobre">Sobre</router-link>
      <router-link to="/contato">Contato</router-link>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column; 
  margin: 0;
  background-color: #fdf5ac;
  width: 100%;
}
.banner {
  width: 1999px;      
  height: 250px;     
  object-fit: cover;
}
.nav {
  display: flex;
  gap: 1rem;
}

.nav a {
  margin-left: 8rem;
  color: black;
  font-size: 25px;
  text-decoration: none;
  font-family: Arial, Helvetica, sans-serif;

}

</style>
