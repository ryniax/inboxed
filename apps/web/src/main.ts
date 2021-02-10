import { createApp } from 'vue';
import { Socket } from 'socket.io-client';
import Main from './Main.vue';
import router from './router';
import store from './store';
import { establishSocketConnection } from './socket';
import './styles/index.scss';

const socket: Socket = establishSocketConnection();
const vueApp = createApp(Main);

vueApp
  .use(store)
  .use(router)
  .mount('#app');

vueApp.config.globalProperties.$socket = socket;
