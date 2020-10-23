import Vue from 'vue'
import VueRouter from 'vue-router'
//项目页面
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/',
    name: 'Home',
    component: Home
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

const router = new VueRouter({
  mode:'history',
  base:process.env.BASE_URL,
  routes
})

export default router
