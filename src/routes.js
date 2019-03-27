import { $loadable } from '#';

export default [
  {
    path: '/',
    exact: true,
    component: $loadable.load(() => import('./modules/app'))
  },
  {
    path: '/admin/options/index',
    component: $loadable.load(() => import('./modules/options/index'))
  }
];
