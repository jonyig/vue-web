import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/temperature',
    name: 'Temperature',
    component: () => import( '../views/temperature')
  },
  {
    path: '/count',
    name: 'Count',
    component: () => import( '../views/count')
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import( '../views/todo')
  },
  { path: '/*', redirect: '/' }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
