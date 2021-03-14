import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../Home.vue';
import App from '../App.vue';
import Login from '../views/Login.vue';
import NotFound from '../views/404.vue';
import Dashboard from '../views/Dashboard.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: 'login',
    children: [
      {
        path: 'login',
        name: 'login',
        component: Login,
      },
    ],
  },
  {
    path: '/app',
    name: 'App',
    component: App,
    redirect: '/app/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard,
      },
    ],
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
