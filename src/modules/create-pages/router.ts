const moduleRoute = {
  path: '/create-pages',
  component: () => import('./Module.vue'),
  children: [
    {
      path: '',
      name: 'create-pages',
      component: () => import('./pages/CreatePages.vue')
    }
  ]
}

export default (router: any) => {
  router.addRoute(moduleRoute)
}
