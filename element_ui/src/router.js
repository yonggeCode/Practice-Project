import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('@Element/layout'),
    },
    {
      path: '/container',
      name: 'container',
      component: () => import('@Element/container'),
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('@Element/button'),
    },
    {
      path: '/link',
      name: 'link',
      component: () => import('@Element/link'),
    },
  ],
});
