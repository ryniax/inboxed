<template>
  <AuthViewContainer>
    <RegisterForm />
  </AuthViewContainer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthViewContainer from '../components/auth-forms/containers/AuthViewContainer.vue';
import RegisterForm from '../components/auth-forms/RegisterForm.vue';

export default defineComponent({
  components: {
    RegisterForm,
    AuthViewContainer,
  },
});
</script>

<style scoped lang="scss"></style>
