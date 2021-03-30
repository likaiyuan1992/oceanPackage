import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  //   mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'index',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/index.vue'),
      children: [
        {
          path: '/',
          component: () => import('@/views/home.vue'),
          name: 'home'
        },
        {
          path: '/home',
          component: () => import('@/views/home.vue'),
          name: 'home'
        },
        {
          path: '/companyInfo',
          component: () => import('@/views/companyInfo.vue'),
          name: 'companyInfo'
        },
        {
          path: '/contract',
          component: () => import('@/views/contract.vue'),
          name: 'contract'
        },
        {
          path: '/example',
          component: () => import('@/views/example.vue'),
          name: 'example'
        },
        {
          path: '/aboutUs',
          component: () => import('@/views/aboutUs.vue'),
          name: 'aboutUs'
        }
      ]
    }
  ]
})

export default router
