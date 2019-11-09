import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Location from '../views/location.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/location',
    name: 'location',
    component: Location
  }
]

const router = new VueRouter({
  routes
})

export default router
