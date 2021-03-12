<template>
  <AuthFormContainer>
    <AuthFormTitle>{{ capitalize($t('authForms.singUp')) }}</AuthFormTitle>
    <form @submit.prevent="registerUser">
      <div class="form-inputs">
        <AuthFormInput
          :label="capitalize($t('authForms.email'))"
          inputType="text"
          iconName="email-icon"
          @input="setInputValue($event.target.value, 'email')"
        />
        <AuthFormInput
          :label="capitalize($t('authForms.username'))"
          inputType="text"
          iconName="user-icon"
          @input="setInputValue($event.target.value, 'username')"
        />
        <AuthFormInput
          :label="capitalize($t('authForms.password'))"
          inputType="password"
          iconName="password-icon"
          :underLabel="capitalize($t('authForms.forgotPassword'))"
          @input="setInputValue($event.target.value, 'password')"
        />
      </div>
      <div class="form-buttons">
        <AuthFormButton>{{ capitalize($t('authForms.register')) }}</AuthFormButton>
        <ButtonsDivider>{{ capitalize($t('authForms.hasAccount')) }}</ButtonsDivider>
        <AuthFormButton outline>{{ capitalize($t('authForms.logIn')) }}</AuthFormButton>
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
import capitalize from '@/utils/capitalize';

export default {
  components: {
    AuthFormContainer,
    AuthFormTitle,
    AuthFormInput,
    AuthFormButton,
    ButtonsDivider,
  },
  setup() {
    return {
      capitalize,
    };
  },
};
</script>

<style></style>
