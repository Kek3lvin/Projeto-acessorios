<template>
<section class="sobre">
  <h1>Sobre o projeto</h1>

  <div class="sobre-cards">
    <div class="sobre-card">
      <h2> O projeto</h2>
      <p>
        A Golden Style foi desenvolvida por estudantes do curso de Informática
        para Internet como parte de um projeto acadêmico.
      </p>
    </div>

    <div class="sobre-card">
      <h2> Objetivo</h2>
      <p>
        Aplicar na prática conceitos de desenvolvimento web, design de interfaces
        e navegação entre páginas.
      </p>
    </div>

    <div class="sobre-card">
      <h2>Tecnologias</h2>
      <p>
        O site foi desenvolvido utilizando HTML, CSS, JavaScript, Vue.js
        e o recurso de localStorage.
      </p>
    </div>

    <div class="sobre-card">
      <h2> Aprendizado</h2>
      <p>
        O projeto simula uma loja online real, permitindo compreender o funcionamento
        de carrinho de compras, rotas e organização de componentes.
      </p>
    </div>
  </div>
</section>
</template>

<style scoped>
.sobre {
  padding: 7px 20px;
  max-width: 900px;
  margin: auto;
}

.sobre h1 {
  text-align: center;
  margin-bottom: 40px;
  margin-top: 20px;
  color: #fff;
  font-size: 35px;
}

.sobre-card {
  background: #ffffff;
  color: #333;
  padding: 24px;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.15);
}

.sobre-card h2 {
  margin-bottom: 10px;
  color: #a67c00; 
}
</style>

