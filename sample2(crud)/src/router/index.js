import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddCity from '../views/AddCity.vue'
import EditCity from '../views/EditCity.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/add-city',
    name: 'AddCity',
    component: AddCity
  },

  {
    path: "/cities/:cityId",
    name: 'EditCity',
    component: EditCity
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
