import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import ViewNumberOne from '../views/ViewNumberOne.vue'
import ViewNumberTwo from '../views/ViewNumberTwo.vue'
import ViewNumberThree from '../views/ViewNumberThree.vue'
import ViewNumberFour from '../views/ViewNumberFour.vue'

const routes = [
  {
    path: '/d',
    name: 'Home',
    component: Home
  },
  {
    path: '/viewOne',
    name: 'ViewNumberOne',
    component: ViewNumberOne
    
  },
  {
    path: '/viewTwo',
    name: 'ViewNumberTwo',
    component: ViewNumberTwo
  },
  {
    path: '/viewThree',
    name: 'ViewNumberThree',
    component: ViewNumberThree
  },
  {
    path: '/viewFour',
    name: 'ViewNumberFour',
    component: ViewNumberFour
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
