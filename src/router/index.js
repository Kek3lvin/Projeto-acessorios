import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Produtos from '../views/Produtos.vue'
import Carrinho from '../views/Carrinho.vue'
import Sobre from '../views/Sobre.vue'
import Contato from '../views/Contato.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/Produtos', component: Produtos },
  { path: '/Carrinho', component: Carrinho },
  { path: '/Sobre', component: Sobre},
  { path: '/Contato', component: Contato },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
