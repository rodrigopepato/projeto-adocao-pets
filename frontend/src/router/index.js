import { createRouter, createWebHistory } from 'vue-router'

import ClientesView from '../views/ClientesView.vue'
import ProdutosView from '../views/ProdutosView.vue'
import VendasView   from '../views/VendasView.vue'
import RelatoriosView from '../views/RelatoriosView.vue'
import LoginView from '../views/LoginView.vue'

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
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router