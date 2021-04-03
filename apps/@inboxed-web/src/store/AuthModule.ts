/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
import { HTTPGet, HTTPPost } from '../api';

@Module({ dynamic: true, store, name: 'Auth' })
export default class AuthModule extends VuexModule {
  user!: any; // temporary, type to change

  @Action({ rawError: true })
  async loginUser(loginFormData: { email: string; password: string }) {
    try {
      const data = { email: loginFormData.email, password: loginFormData.password };
      const { data: loginUserResponse } = await HTTPPost('/users/session', data);

      this.setUser(loginUserResponse.body.user);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Action({ rawError: true })
  async registerUser(registerFormData: { email: string; nickname: string; password: string }) {
    try {
      const data = {
        email: registerFormData.email,
        nickname: registerFormData.nickname,
        password: registerFormData.password,
      };
      const { data: registerUserResponse } = await HTTPPost('/users', data);

      this.setUser(registerUserResponse.body.user);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Action({ rawError: true })
  async getSessionUser() {
    try {
      const { data: sessionUserResponse } = await HTTPGet('/users/session');
      this.setUser(sessionUserResponse.body.user);
    } catch (error) {
      throw new Error(error);
    }
  }

  // temporary any, type to change
  @Mutation
  setUser(user: any) {
    this.user = user;
  }

  get getUser() {
    return this.user;
  }
}
