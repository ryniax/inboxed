import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../Home.vue';
import App from '../App.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import NotFound from '../views/404.vue';
import Dashboard from '../views/Dashboard.vue';
import Server from '../views/Server.vue';
import FindServer from '../views/FindServer.vue';

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
      {
        path: 'register',
        name: 'register',
        component: Register,
      },
    ],
  },
  {
    path: '/app',
    name: 'app',
    component: App,
    redirect: '/app/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Dashboard,
      },
      {
        path: 'server',
        name: 'server',
        component: Server,
      },
      {
        path: 'servers',
        name: 'servers',
        component: FindServer,
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
