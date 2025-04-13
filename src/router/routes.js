
const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    redirect: { name: 'welcome' },
    children: [
      { path: '', name: 'welcome', component: () => import('pages/landing/WelcomePage.vue') },
      { 
        path: 'projects', 
        name: 'projects',
        component: () => import('src/pages/projects/ProjectsList.vue') 
      },
      { 
        path: 'project-review', 
        name: 'project-review',
        component: () => import('src/pages/projects/ProjectReview.vue') 
      },
      { 
        path: 'more-about', 
        name: 'more-about',
        component: () => import('src/pages/projects/AboutMore.vue') 
      },
      { 
        path: 'donors-list', 
        name: 'donors-list',
        component: () => import('src/pages/projects/DonorsList.vue') 
      }
    ]
  },
  { 
    path: '/success-payment', 
    name: 'success-payment',
    component: () => import('src/pages/payment/SuccessPayment.vue') 
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
