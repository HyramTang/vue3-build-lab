import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '@/views/TheHome.vue'
// import { RouterView } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      // component: RouterView,
      children: [
        {
          path: 'home',
          name: 'name',
          component: TheHome
        },
        {
          path: 'cp01',
          name: 'cp01',
          component: () => import('@/views/cp01/index.vue')
        },
        {
          path: 'cp02',
          name: 'cp02',
          component: () => import('@/views/cp02/index.vue')
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
