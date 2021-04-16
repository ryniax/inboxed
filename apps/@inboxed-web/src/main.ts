/* eslint-disable @typescript-eslint/camelcase */
import { createApp } from 'vue';
import { Socket } from 'socket.io-client';
import { createI18n } from 'vue-i18n';
import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';
import Main from './Main.vue';
import router from './router';
import store from './store';
import { establishSocketConnection } from './socket';
import en_EN from './locale/en_EN';
import pl_PL from './locale/pl_PL';
import './styles/index.scss';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

export const socket: Socket = establishSocketConnection();

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

vueApp.use(PrimeVue);
vueApp.directive('tooltip', Tooltip);

vueApp.mount('#app');

vueApp.config.globalProperties.$socket = socket;
