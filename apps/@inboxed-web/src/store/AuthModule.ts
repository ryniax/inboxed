import { Action, Module, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
import { HTTPPost } from '../api';

@Module({ dynamic: true, store, name: 'Auth' })
export default class AuthModule extends VuexModule {
  @Action({ rawError: true })
  async loginUser(loginFormData: { email: string; password: string }) {
    try {
      const data = { email: loginFormData.email, password: loginFormData.password };
      const { data: loginUserResponse } = await HTTPPost('/users/session', data);
      console.log(loginUserResponse);
    } catch (error) {
      console.log(error.response);
    }
  }

  @Action
  async registerUser(registerFormData: { email: string; username: string; password: string }) {
    try{
      const data = {email: registerFormData.email, username: registerFormData.username, password: registerFormData.password}
      const {data: registerUserResponse} = await HTTPPost('/users', data);
      console.log(registerUserResponse);
    }catch(error){
      console.log(error.response);
    }
  }
}
