const moduleRoute = {
  path: '/contacts',
  component: () => import('./Module.vue'),
  children: [
    {
      path: '',
      name: 'contacts',
      component: () => import('./pages/Contacts.vue')
    }
  ]
}

export default (router: any) => {
  router.addRoute(moduleRoute)
}
