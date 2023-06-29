import { createRouter, createWebHistory } from 'vue-router'
import { ConstRouter } from './routers'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: ConstRouter,
})

export default router
