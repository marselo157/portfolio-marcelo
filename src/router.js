import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Sobre from './views/Sobre.vue'
import Contato from './views/Contato.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/sobre', component: Sobre },
  { path: '/contato', component: Contato },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router