import { createRouter, createWebHashHistory } from 'vue-router'

const redirect = localStorage.getItem('dev_router_path') ||'/editor'

const routes = [
  {
    path: '',
    redirect
  },
  {
    name: 'editor',
    path: '/editor',
    component: () => import('../editor/index.vue')
  },
  {
    name: 'codeMirror',
    path: '/codeMirror',
    component: () => import('../codeMirror/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  next()
})

export default router