/* eslint-disable @typescript-eslint/camelcase */
import { createApp } from 'vue';
import { Socket } from 'socket.io-client';
import { createI18n } from 'vue-i18n';
import Main from './Main.vue';
import router from './router';
import store from './store';
import { establishSocketConnection } from './socket';
import './styles/index.scss';
import en_EN from './locale/en_EN';
import pl_PL from './locale/pl_PL';

const socket: Socket = establishSocketConnection();

const i18n = createI18n({
  messages: {
    en: en_EN,
    pl: pl_PL,
  },
  fallbackLocale: 'en',
  locale: 'en',
});

const vueApp = createApp(Main);

vueApp.use(store);
vueApp.use(router);
vueApp.use(i18n);
vueApp.mount('#app');

vueApp.config.globalProperties.$socket = socket;
