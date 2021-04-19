<template>
  <div class="app">
    <AppToolbar />
    <div class="content">
      <AppLeftSidebar />
      <router-view />
      <AppRightSidebar />
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount } from 'vue';
import { getModule } from 'vuex-module-decorators';
import { useRoute } from 'vue-router';
import AppToolbar from './components/common/AppToolbar.vue';
import AppLeftSidebar from './components/common/AppLeftSidebar.vue';
import AppRightSidebar from './components/common/AppRightSidebar.vue';
import Servers from './store/ServersModule';

export default defineComponent({
  components: {
    AppToolbar,
    AppLeftSidebar,
    AppRightSidebar,
  },
  setup() {
    const ServersModule = getModule(Servers);
    const route = useRoute();

    onBeforeMount(async () => {
      try {
        await ServersModule.getServers();

        const isServerRoute = route.name === 'server';
        const currentServer = ServersModule.getCurrentServer;
        const userServers = ServersModule.getUserServers;

        if (isServerRoute && !currentServer.id) {
          ServersModule.setCurrentServer(userServers[0].id);
        }
      } catch (error) {
        console.log(error);
      }
    });
  },
});
</script>

<style scoped lang="scss">
.app {
  height: 100vh;
  width: 100vw;
  background-color: $secondary-color;
}

.content {
  width: 100%;
  height: calc(100vh - #{$toolbar-height});
  display: flex;
}
</style>
