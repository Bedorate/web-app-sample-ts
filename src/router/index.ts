import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Top from '../views/Top.vue'
import About from '../views/About.vue'
import TermsOfService from '../views/TermsOfService.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Top',
    component: Top //Homeってコンポーネントを呼び出しますよ
  },
  {
    path: '/home',
    name: 'home',
    component: Home //Homeってコンポーネントを呼び出しますよ
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tos',
    name: 'tos',
    component: TermsOfService 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
