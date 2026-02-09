<template>
  <main class="carrinho">
    <h1>Seu carrinho</h1>

    <p v-if="itens.length === 0">
      Seu carrinho está vazio 
    </p>

    <div v-else>
      <div class="item" v-for="(item, index) in itens" :key="index">
        <span>{{ item.nome }}</span>
        <span>R$ {{ item.preco.toFixed(2) }}</span>

        <button @click="remover(index)">Remover</button>
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
.carrinho h1{
  text-align: center
}
.carrinho button{
  border-radius: 2rem;
  background-color: black;
  color: white
}
.item {
  display: flex;
  justify-content: space-between;
  background: white;
  color: black;
  padding: 12px;
  margin: 10px 0;
  border-radius: 10px;
}
</style>
