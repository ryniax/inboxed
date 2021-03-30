import { Action, Module, VuexModule } from 'vuex-module-decorators';
import store from '@/store';
import { HTTPPost } from '../api';
import router from '../router/index';

@Module({ dynamic: true, store, name: 'Auth' })
export default class AuthModule extends VuexModule {
  router: any;
  @Action({ rawError: true })
  async loginUser(loginFormData: { email: string; password: string }) {
    try {
      const data = { email: loginFormData.email, password: loginFormData.password };
      const { data: loginUserResponse } = await HTTPPost('/users/session', data);
      console.log(loginUserResponse);
      this.router.replace('/app/dashboard');
    } catch (error) {
      console.log(error.response.data);
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
      this.router.replace('/app/dashboard');
      console.log(registerUserResponse);
    } catch (error) {
      console.log(error.response);
    }
  }
}
