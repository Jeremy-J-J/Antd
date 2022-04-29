export default [
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  // new
  { 
    path: '/new', 
    name: 'new', 
    icon: 'user', 
    routes: [ 
        { 
            path: '/new/analysis', 
            name: 'analysis', 
            component: './New/NewAnalysis', 
        },
    ], 
    // hideInMenu: true,
  },
  {
    component: './404',
  },
];
