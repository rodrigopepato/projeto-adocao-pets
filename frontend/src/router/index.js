import { createRouter, createWebHistory } from 'vue-router'

import ClientesView from '../views/ClientesView.vue'
import ProdutosView from '../views/ProdutosView.vue'
import VendasView from '../views/VendasView.vue'
import RelatoriosView from '../views/RelatoriosView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    redirect: '/relatorios',
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: ClientesView,
    meta: { requiresAuth: true },
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: ProdutosView,
    meta: { requiresAuth: true },
  },
  {
    path: '/vendas',
    name: 'vendas',
    component: VendasView,
    meta: { requiresAuth: true },
  },
  {
    path: '/relatorios',
    name: 'relatorios',
    component: RelatoriosView,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token')

  if (to.meta.requiresAuth && !token) {
    next('/login')
    return
  }

  if (to.path === '/login' && token) {
    next('/relatorios')
    return
  }

  next()
})

export default router