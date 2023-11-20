const moduleRoute = {
  path: '/position-promotion',
  component: () => import('./Module.vue'),
  children: [
    {
      path: '',
      name: 'position-promotion',
      component: () => import('./pages/PositionPromotion.vue')
    }
  ]
}

export default (router: any) => {
  router.addRoute(moduleRoute)
}
