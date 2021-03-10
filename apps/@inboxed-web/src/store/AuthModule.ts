import { Action, Module, VuexModule } from 'vuex-module-decorators';
import store from '@/store';

@Module({ dynamic: true, store, name: 'AuthModule' })
export default class AuthModule extends VuexModule {
  @Action
  async loginUser(loginFormData: { email: string; password: string }) {
    // eslint-disable-next-line no-console
    console.log(loginFormData.email, loginFormData.password);
  }
  // async registerUser(registerFormData: {email: string; nickname: string; password: string}){
  //   // eslint-disable-next-line no-console
  //   console.log(registerFormData.email, registerFormData.nickname, registerFormData.password);
  // }
}
