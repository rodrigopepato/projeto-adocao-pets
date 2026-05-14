import { createRouter, createWebHistory } from 'vue-router'

import ClientesView from '../views/ClientesView.vue'
import ProdutosView from '../views/ProdutosView.vue'

const routes = [
  {
    path: '/',
    redirect: '/clientes',
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: ClientesView,
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: ProdutosView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router