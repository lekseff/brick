import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../Views/HomePage.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../Views/ProductsPage.vue')
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: () => import('../Views/DeliveryPage.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../Views/ContactsPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default  router
