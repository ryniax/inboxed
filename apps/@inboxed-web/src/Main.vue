<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { getModule } from 'vuex-module-decorators';
import Auth from './store/AuthModule';

export default defineComponent({
  setup() {
    const AuthModule = getModule(Auth);
    const getUser = async () => {
      try {
        await AuthModule.getSessionUser();
        // redirect to app
      } catch (error) {
        // redirect to homepage
      }
    };

    onMounted(getUser);
  },
});
</script>
