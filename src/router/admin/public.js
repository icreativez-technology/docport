const admin ={
    layout: {
        fullPage: () => import( "../../views/layouts/fullpage.vue"),
    },
    auth: {
        login: () => import('../../views/auth/login.vue'),
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
          path: 'admin/auth/login',
          name:'admin.auth.login',
          component: admin.auth.login,
        },
      ],
    },
  ]

export default routes;