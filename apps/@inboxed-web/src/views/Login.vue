<template>
  <AuthViewContainer>
    <LoginForm />
  </AuthViewContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthViewContainer from '../components/auth-forms/containers/AuthViewContainer.vue';
import LoginForm from '../components/auth-forms/LoginForm.vue';

export default defineComponent({
  components: {
    LoginForm,
    AuthViewContainer,
  },
});
</script>

<style scoped lang="scss"></style>
