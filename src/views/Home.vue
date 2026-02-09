<template>
  <section class="produtos">

    <div class="texto">
      <h1>Produtos em alta</h1>
    </div>

    <div class="card">
      <img src="/brinco.webp" alt="Brinco">

      <h3>Brinco Dourado</h3>
      <p>R$ 29,90</p>

      <button>Adicionar</button>
    </div>

    <div class="card">
      <img src="/brinco2.webp" alt="Brinco">

      <h3>Brinco Prata</h3>
      <p>R$ 34,90</p>

      <button>Adicionar</button>
    </div>

    <div class="card">
      <img src="/colar.webp" alt="Colar">

      <h3>Colar Elegante</h3>
      <p>R$ 49,90</p>

      <button>Adicionar</button>
    </div>

  </section>
</template>

<style scoped>
.produtos {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 50px;
  flex-wrap: wrap;
}

.texto {
  width: 100%;
  text-align: center;
  font-size: 26px;
  margin-bottom: 20px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  text-align: center;
  transition: transform 0.3s;
  width: 220px;
  color: black
}

.card:hover {
  transform: translateY(-6px);
}

.card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  margin-bottom: 10px;
}

.card h3 {
  font-size: 16px;
  margin: 6px 0;
}

.card button {
  background: black;
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.3s;
}

.card button:hover {
  transform: scale(1.1);
}
</style>
