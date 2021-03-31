import { Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from '@/store';

@Module({ dynamic: true, store, name: 'Modals' })
export default class ModalsModule extends VuexModule {
  newServerModal = false;

  @Mutation
  switchNewServerModal() {
    this.newServerModal = !this.newServerModal;
  }

  get newServerModalValue() {
    return this.newServerModal;
  }
}
