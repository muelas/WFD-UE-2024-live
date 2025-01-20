import type {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/IndexPage.vue')},
      {path: 'param/:name', component: () => import('pages/ParameterPage.vue'), props: true},
    ],
  },

  // Routen für unser SecondLayout
  {
    path: '/sec',
    component: () => import('layouts/SecondLayout.vue'),
    children: [
      {path: '', component: () => import('pages/FormPage.vue')},
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
