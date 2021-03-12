<template>
  <AuthViewContainer>
    <LoginForm />
  </AuthViewContainer>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import AuthViewContainer from '../components/auth-forms/containers/AuthViewContainer.vue';
import LoginForm from '../components/auth-forms/LoginForm.vue';

export default defineComponent({
  components: {
    LoginForm,
    AuthViewContainer,
  },
  setup() {
    // eslint-disable-next-line no-console
    onMounted(() => console.log('test'));
  },
});
</script>

<style scoped lang="scss"></style>
