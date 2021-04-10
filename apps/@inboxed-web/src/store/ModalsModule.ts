import { Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from '@/store';

@Module({ dynamic: true, store, name: 'Modals' })
export default class ModalsModule extends VuexModule {
  newServerModal = false;
  newChannelModal = false;

  @Mutation
  switchNewServerModal() {
    this.newServerModal = !this.newServerModal;
  }

  @Mutation
  switchNewChannelModal() {
    this.newChannelModal = !this.newChannelModal;
  }

  get newServerModalValue() {
    return this.newServerModal;
  }

  get newChannelModalValue() {
    return this.newChannelModal;
  }
}
