import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tareas',
    name: 'Tareas',
    component: () => import(/* webpackChunkName: "tareas" */ '../views/Tareas.vue')
  },
  {
    path: '/peliculas',
    name: 'Peliculas',
    component: () => import(/* webpackChunkName: "peliculas" */ '../views/Peliculas.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
