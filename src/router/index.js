import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
 
  },
  
  {
    path: '/dashboard',
    name: 'About',
    component: () => import('../views/dashboard'),
    children: [
      {
        name: 'crearol',
        path: '/dashboard/',
        component: () => import('../views/contacto.vue'),
      },
      {
        name: 'crearcreditos',
        path: '/dashboard/creditos',
        component: () => import('../views/creditos.vue'),
      },
    ],
  },
]

const router = new VueRouter({
 // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
