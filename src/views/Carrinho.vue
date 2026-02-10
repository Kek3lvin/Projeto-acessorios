<template>
  <main class="carrinho">
    <h1>Seu carrinho</h1>
    <p>Aqui você encontra todos os itens que escolheu para sua compra. Revise os produtos, remova o que desejar e acompanhe o valor total do carrinho.</p>
    <p v-if="itens.length === 0">
      Seu carrinho está vazio 
    </p>

    <div v-else>
      <div class="item" v-for="(item, index) in itens" :key="index">
        <span>{{ item.nome }}</span>
        <span>R$ {{ item.preco.toFixed(2) }}</span>

        <button @click="remover(index)"><img src="/trash.png" alt="lixo"></button>
      </div>

      <h2>Total: R$ {{ total }}</h2>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"

const itens = ref([])

onMounted(() => {
  itens.value = JSON.parse(localStorage.getItem("carrinho")) || []
})

function remover(index) {
  itens.value.splice(index, 1)
  localStorage.setItem("carrinho", JSON.stringify(itens.value))
}

const total = computed(() =>
  itens.value.reduce((soma, item) => soma + item.preco, 0).toFixed(2)
)
</script>

<style scoped>
.carrinho {
  padding: 40px;
  color: white;
}
.carrinho p{
  text-align: center;
  padding-bottom: 9px;
  font-size: 22px;
}
h1{
  text-align: center;
  padding-bottom: 3rem;
  font-size: 60px;
}
button > img{
  width: 26px;
}
span{
  font-size: 20px;
}
.item, h2 {
  display: flex;
  justify-content: space-between;
  background: white;
  color: black;
  padding: 12px;
  margin: 10px 0;
  border-radius: 10px;
  width: 500px;
  margin-left: 35%;
}
</style>
