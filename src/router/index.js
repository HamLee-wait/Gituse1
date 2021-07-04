import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import BusinessList from '../views/BusinessList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },{
    path: '/index',
    name: 'Index',
    component: Index
  },{
    path: '/businessList',
    name: 'BusinessList',
    component: BusinessList
  }
]

const router = new VueRouter({
  routes
})

export default router
