import { createRouter, createWebHistory } from 'vue-router'

import ClientesView from '../views/ClientesView.vue'
import ProdutosView from '../views/ProdutosView.vue'
import VendasView   from '../views/VendasView.vue'
import RelatoriosView from '../views/RelatoriosView.vue'

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
  {
  path: '/vendas',
  name: 'vendas',
  component: VendasView,
  },
  {
    path: '/relatorios',
    name: 'relatorios',
    component: RelatoriosView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router