


const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: 'partisia', component: () => import('pages/Partisia.vue') },
  //     { path: 'wallets', component: () => import('pages/Wallets.vue') },
  //     { path: 'audit', component: () => import('pages/Audit.vue') },
  //     { path: 'installation', component: () => import('pages/Installation.vue') },
  //     { path: 'connect', component: () => import('pages/Connect.vue') },
  //     { path: 'contract', component: () => import('pages/Contract.vue') },
  //     { path: 'sign_text', component: () => import('pages/SignText.vue') },
  //     { path: 'private_key', component: () => import('pages/PrivateKey.vue') },
  //     { path: '', component: () => import('pages/Partisia.vue') },
  //     // { path: '', component: () => import('pages/Index.vue') }
  //   ],
  // },
  {
    path: '/',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/successfulDonation',
    component: () => import('../views/SuccessfulDonation.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
]

export default routes
