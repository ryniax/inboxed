import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../Home.vue';
import App from '../App.vue';
import Login from '../views/Login.vue';
import NotFound from '../views/404.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: 'login',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: Login,
      },
    ],
  },
  {
    path: '/app',
    name: 'App',
    component: App,
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
