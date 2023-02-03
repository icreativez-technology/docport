const admin ={
    layout: {
        fullPage: () => import( "../../views/layouts/admin.vue"),
    },
    dashboard: {
        index: () => import('../../views/dashboard/index.vue'),
        planner: () => import('../../views/planner/index.vue'),
    },
}

const routes = [
    {
      path: '/',
      components: {
        default: admin.layout.fullPage,
      },
      children: [
        {
          path: 'admin/dashboard',
          name:'admin.dashboard',
          component: admin.dashboard.index,
        },
        {
            path: 'admin/planner/index',
            name:'admin.dashboard.planner',
            component: admin.dashboard.planner,
        },
      ],
    },
  ]

export default routes;