/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
import { HTTPGet, HTTPPost } from '../api';

@Module({ dynamic: true, store, name: 'Servers' })
export default class ServersModule extends VuexModule {
  userServers: any = []; // temporary, type to change
  currentServer: any = {}; // temporary, type to change
  currentChannel: any = {}; // temporary, type to change
  channelsMessages: any = []; // temporary, type to change

  @Action({ rawError: true })
  async getServers() {
    try {
      const { data: serversResponse } = await HTTPGet('/servers/me');
      this.setServers(serversResponse.body.servers);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Action({ rawError: true })
  async createServer(serverName: string) {
    try {
      await HTTPPost('/servers', { name: serverName });
      this.getServers();
      this.setCurrentServer(this.currentServer.id);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Action({ rawError: true })
  async createChannel(channelName: string) {
    try {
      await HTTPPost('/channels', { name: channelName, serverId: this.currentServer.id });
      await this.getServers();
      this.setCurrentServer(this.currentServer.id);
    } catch (error) {
      throw new Error(error);
    }
  }

  // temporary any, type to change
  @Mutation
  async setServers(servers: any) {
    this.userServers = servers;
  }

  @Mutation
  initChannelsMessages() {
    this.currentServer.channels.forEach((channel: any) => {
      const newChannelMessages = {
        channelId: channel.id,
        messages: [],
      };

      const messagesExist = this.channelsMessages.some(
        (channelMessages: any) => channelMessages.channelId === newChannelMessages.channelId,
      );
      console.log(messagesExist);

      if (!messagesExist || this.channelsMessages.length <= 0)
        this.channelsMessages.push(newChannelMessages);
    });
  }

  // temporary any, type to change
  @Mutation
  setCurrentServer(serverId: any) {
    const currentServer = this.userServers.find((server: any) => server.id === serverId);

    this.currentServer = currentServer;

    const { 0: currentChannel } = this.currentServer.channels;
    this.currentChannel = currentChannel;
  }

  // temporary any, type to change
  @Mutation
  setCurrentChannel(channel: any) {
    this.currentChannel = channel;
  }

  get getUserServers() {
    return this.userServers;
  }

  get getCurrentServer() {
    return this.currentServer;
  }

  get getCurrentChannel() {
    return this.currentChannel;
  }

  get getChannelsMessages() {
    return this.channelsMessages;
  }
}
