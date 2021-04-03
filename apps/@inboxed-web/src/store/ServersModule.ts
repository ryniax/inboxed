/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
import { HTTPGet } from '../api';

@Module({ dynamic: true, store, name: 'Servers' })
export default class ServersModule extends VuexModule {
  userServers!: any; // temporary, type to change

  @Action({})
  async getServers() {
    try {
      const { data: serversResponse } = await HTTPGet('/servers/me');
      this.setServers(serversResponse.body.servers);
    } catch (error) {
      throw new Error(error);
    }
  }

  // temporary any, type to change
  @Mutation
  async setServers(servers: any) {
    this.userServers = servers;
  }

  get getUserServers() {
    return this.userServers;
  }
}
