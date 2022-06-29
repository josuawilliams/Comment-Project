import Vue from 'vue'
import VueRouter from 'vue-router'
import loginPage from '../views/loginPage.vue'
import DashboardPage from '../views/DashboardPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: loginPage
  },
  {
    path: '/',
    name: 'dashboard',
    component: DashboardPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(!localStorage.getItem("access_token")&& to.name=='dashboard'){
    next({name : 'login'})
  }
  if(localStorage.getItem("access_token")&& to.name=='login'){
    next({name : 'dashboard'})
  }
  next()
})

export default router
