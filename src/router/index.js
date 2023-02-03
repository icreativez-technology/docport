import { createRouter, createWebHistory } from "vue-router";
const admin ={
  layout: {
      fullPage: () => import( "../views/layouts/admin.vue"),
  },
  auth: {
    login: () => import('../views/auth/login.vue'),
  },
  dashboard: {
      index: () => import('../views/dashboard/index.vue'),
  },
  vehicles: {
    index: () => import('../views/vehicles/index.vue'),
    test: () => import('../views/vehicles/test.vue'),
  },
  partners: {
    index: () => import('../views/partners/index.vue'),
  },
  orders: {
    index: () => import('../views/orders/index.vue'),
    master: () => import('../views/orders/masterorders/index.vue'),
  }
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: "active",
   routes : [
    {
      path: '/',
      components: {
        default: admin.layout.fullPage,
      },
      children: [
        {
          path: 'admin/auth/login',
          name:'admin.auth.login',
          component: admin.auth.login,
        },
        {
          path: 'admin/dashboard',
          name:'admin.dashboard',
          component: admin.dashboard.index,
        },
        {
          path: 'admin/vehicles/index',
          name:'admin.vehicles.index',
          component: admin.vehicles.index,
        },
        {
          path: 'admin/partners/index',
          name:'admin.partners.index',
          component: admin.partners.index,
        },
        {
          path: 'admin/orders/index',
          name:'admin.orders.index',
          component: admin.orders.index,
        },
        {
          path: 'admin/masterorders/index',
          name:'admin.masterorders.index',
          component: admin.orders.master,
        },
        {
          path: 'admin/vehicles/test',
          name:'admin.vehicles.test',
          component: admin.vehicles.test,
        }
      ],
    },
  ]
});

export default router;
