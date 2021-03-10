<template>
  <AuthFormContainer>
    <AuthFormTitle>{{ $t('authForms.singUp') }}</AuthFormTitle>
    <form @submit.prevent="registerUser">
      <div class="form-inputs">
        <AuthFormInput
          :label="$t('authForms.email')"
          inputType="text"
          iconName="email-icon"
          @input="setInputValue($event.target.value, 'email')"
        />
        <AuthFormInput
          :label="$t('authForms.nickname')"
          inputType="text"
          iconName="user-icon"
          @input="setInputValue($event.target.value, 'nickname')"
        />
        <AuthFormInput
          :label="$t('authForms.password')"
          inputType="password"
          iconName="password-icon"
          :underLabel="$t('authForms.forgotPassword')"
          @input="setInputValue($event.target.value, 'password')"
        />
      </div>
      <div class="form-buttons">
        <AuthFormButton>{{ $t('authForms.register') }}</AuthFormButton>
        <ButtonsDivider>{{ $t('authForms.isAccount') }}</ButtonsDivider>
        <AuthFormButton outline>{{ $t('authForms.logIn') }}</AuthFormButton>
      </div>
    </form>
  </AuthFormContainer>
</template>

<script>
import AuthFormTitle from '@/components/auth-forms/core/AuthFormTitle.vue';
import AuthFormContainer from '@/components/auth-forms/containers/AuthFormContainer.vue';
import AuthFormInput from '@/components/auth-forms/core/AuthFormInput.vue';
import AuthFormButton from '@/components/auth-forms/core/AuthFormButton.vue';
import ButtonsDivider from '@/components/auth-forms/utils/ButtonsDivider.vue';

export default {
  components: {
    AuthFormContainer,
    AuthFormTitle,
    AuthFormInput,
    AuthFormButton,
    ButtonsDivider,
  },
};
</script>

<style></style>
