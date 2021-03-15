<template>
  <AuthFormContainer>
    <AuthFormTitle>{{ capitalize($t('authForms.signUp')) }}</AuthFormTitle>
    <form class="form" @submit.prevent="registerUser">
      <div class="form--inputs">
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
          @input="setInputValue($event.target.value, 'password')"
        />
      </div>
      <div class="form--buttons">
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

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 93%;

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

@media (min-width: 1440px) {
  .form {
    &--inputs {
      width: 95%;
    }
    &--buttons {
      width: 95%;
      &__guest-text {
        font-size: 1.2rem;
      }
    }
  }
}
@media (orientation: landscape) and (max-width: 640px) {
  .auth-form-container {
    padding-top: 1rem;
    h1 {
      font-size: 2rem;
    }
    .form {
      &--inputs {
        padding-top: 0.5rem;
      }
      &--buttons {
        margin: 1rem 0;
      }
    }
  }
}
</style>
