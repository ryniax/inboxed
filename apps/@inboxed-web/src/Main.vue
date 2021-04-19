<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { getModule } from 'vuex-module-decorators';
import { useRouter, useRoute } from 'vue-router';
import Auth from './store/AuthModule';

export default defineComponent({
  setup() {
    const AuthModule = getModule(Auth);
    const router = useRouter();
    const route = useRoute();

    const getUser = async () => {
      try {
        await AuthModule.getSessionUser();
      } catch (error) {
        if (route.name !== 'login') router.push({ name: 'login' });
      }
    };

    onMounted(getUser);
  },
});
</script>
