import { Module, VuexModule } from 'vuex-module-decorators';
import store from '@/store';

@Module({ dynamic: true, store, name: 'ServerModule' })
export default class ServerModule extends VuexModule {}
