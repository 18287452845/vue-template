export const ConstRouter = [
  {
    path: '/login',
    name: 'login',
    meta: { hidden: false, title: '登录', icon: 'Operation' },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'layout',
    meta: { hidden: false, title: '首页', icon: 'Operation' },
    component: () => import('@/views/home/index.vue'),
    children: [
      {
        path: '/home',
        name: 'test',
        meta: { hidden: false, title: '测试', icon: 'Operation' },
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    meta: { hidden: false, title: '404', icon: 'Operation' },
    component: () => import('@/views/404/index.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    meta: { hidden: false, title: 'not-found', icon: 'Operation' },
    redirect: '/404',
  },
]
