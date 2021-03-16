<template>
  <AuthFormContainer>
    <AuthFormTitle>{{ capitalize($t('authForms.signIn')) }}</AuthFormTitle>
    <form class="form" @submit.prevent="loginUser">
      <div class="form--inputs">
        <AuthFormInput
          :label="capitalize($t('authForms.email'))"
          inputType="text"
          iconName="email-icon"
          @input="setInputValue($event.target.value, 'email')"
        />
        <AuthFormInput
          :label="capitalize($t('authForms.password'))"
          inputType="password"
          iconName="password-icon"
          :underLabel="capitalize($t('authForms.forgotPassword'))"
          @input="setInputValue($event.target.value, 'password')"
        />
      </div>
      <div class="form--buttons">
        <AuthFormButton>{{ capitalize($t('authForms.logIn')) }}</AuthFormButton>
        <ButtonsDivider>{{ capitalize($t('authForms.noAccount')) }}</ButtonsDivider>
        <AuthFormButton outline>{{ capitalize($t('authForms.register')) }}</AuthFormButton>
        <span class="form--buttons__guest-text"
          >{{ capitalize($t('authForms.guestAccount')) }}
          <span> {{ capitalize($t('authForms.guest')) }}</span></span
        >
      </div>
    </form>
  </AuthFormContainer>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import { getModule } from 'vuex-module-decorators';
import Auth from '@/store/AuthModule';
import AuthFormTitle from '@/components/auth-forms/core/AuthFormTitle.vue';
import AuthFormContainer from '@/components/auth-forms/containers/AuthFormContainer.vue';
import AuthFormInput from '@/components/auth-forms/core/AuthFormInput.vue';
import AuthFormButton from '@/components/auth-forms/core/AuthFormButton.vue';
import ButtonsDivider from '@/components/auth-forms/utils/ButtonsDivider.vue';
import capitalize from '@/utils/capitalize';

export default defineComponent({
  components: {
    AuthFormContainer,
    AuthFormTitle,
    AuthFormInput,
    AuthFormButton,
    ButtonsDivider,
  },
  setup() {
    const loginFormData = reactive({});
    const AuthModule = getModule(Auth);
    const loginUser = () => AuthModule.loginUser(loginFormData);
    const setInputValue = (value, name) => (loginFormData[name] = value);

    return {
      loginUser,
      setInputValue,
      capitalize,
    };
  },
});
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 87vh;

  &--inputs {
    padding-top: 2.4rem;
    width: 100%;
  }

  &--buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    &__guest-text {
      font-family: $secondary-font;
      color: $secondary-accent-color;
      color: white;
      font-weight: bold;
      margin-top: 1.2rem;

      span {
        color: $primary-accent-color;
        cursor: pointer;
      }
    }
  }
}

@media (min-width: 1024px) {
  .form {
    min-height: fit-content;
    &--buttons {
      margin-top: 10vh;
    }
  }
}
</style>
