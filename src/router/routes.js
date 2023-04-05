import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../Views/HomePage.vue'),
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../Views/ProductsPage.vue'),
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/products/:id',
    name: 'product',
    component: () => import('../Views/ProductPage.vue'),
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: () => import('../Views/DeliveryPage.vue'),
    meta: {
      layout: 'main'
    }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../Views/ContactsPage.vue'),
    meta: {
      layout: 'main'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default  router
