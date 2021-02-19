<template>
  <AuthFormContainer>
    <AuthFormTitle>sign in</AuthFormTitle>
    <form>
      <AuthFormInput label="email" inputType="text" iconName="email-icon" />
      <AuthFormInput
        label="password"
        inputType="password"
        iconName="password-icon"
        underLabel="Forgot password?"
      />
    </form>
  </AuthFormContainer>
</template>

<script>
import { defineComponent } from 'vue';
import AuthFormTitle from '@/components/auth-forms/core/AuthFormTitle.vue';
import AuthFormContainer from '@/components/auth-forms/containers/AuthFormContainer.vue';
import AuthFormInput from '@/components/auth-forms/core/AuthFormInput.vue';

export default defineComponent({
  components: {
    AuthFormContainer,
    AuthFormTitle,
    AuthFormInput,
  },
});
</script>

<style scoped style="scss">
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5.6rem;
}
</style>
