import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Front/LayoutView.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Front/HomeView.vue'),
      },
      {
        path: '/info',
        name: 'Info',
        component: () => import('../views/Front/InfoView.vue'),
      },
      {
        path: '/products',
        component: () => import('../views/Front/UserProducts.vue'),
      },
      {
        path: '/products/:productId',
        component: () => import('../views/Front/ProductView.vue'),
      },
      {
        path: '/cart',
        component: () => import('../views/Front/CartView.vue'),
      },
      {
        path: '/order',
        component: () => import('../views/Front/OrderView.vue'),
      },
      {
        path: '/checkout/:orderId',
        component: () => import('../views/Front/CheckView.vue'),
      },
    ],
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/Admin/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Admin/ProductsView.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/Admin/OrdersView.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/Admin/CouponsView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
