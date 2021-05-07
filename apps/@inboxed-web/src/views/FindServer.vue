<template>
  <div class="servers-list">
    <h1 class="servers-list__title">find server</h1>
    <div class="servers-list__list">
      <div class="servers-list__list--item" v-for="(server, index) in servers" :key="index">
        <span>{{ server.name }}</span>
        <button @click="joinServer(serverId)" :disabled="serverExists(server.id)">Join</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { getModule } from 'vuex-module-decorators';
import axios from '../libs/axios';
import Servers from '../store/ServersModule';

export default defineComponent({
  setup() {
    const ServersModule = getModule(Servers);
    const servers = ref([]);

    const serverExists = (serverId: number) => {
      const userServers = ServersModule.getUserServers;

      const userBelongsToServer = userServers.some((server: any) => server.id === serverId);
      return userBelongsToServer;
    };

    const joinServer = async (serverId: number) => {
      try {
        await axios.post('/servers/users', { serverId });
      } catch (error) {
        console.log(error);
      }
    };

    const getServers = async () => {
      try {
        const { data } = await axios.get('/servers');
        const { servers: allServers } = data.body;
        servers.value = allServers;
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(() => getServers());

    return {
      servers,
      serverExists,
      joinServer,
    };
  },
});
</script>

<style scoped lang="scss">
.servers-list {
  padding: 40px;
  height: 100%;
  width: 100%;

  &__title {
    color: white;
    font-size: 26px;
    font-family: $primary-font;
    text-transform: uppercase;
    margin-bottom: 26px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;

    &--item {
      width: 24%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 20px;
      background: $primary-color;
      padding: 15px;
      border-radius: 10px;

      span {
        font-size: 16px;
        font-weight: bold;
        font-family: $primary-font;
        color: white;
      }

      button {
        margin-top: 15px;
        border: none;
        padding: 8px 10px;
        text-transform: uppercase;
        font-weight: 700;
        cursor: pointer;
        background: $primary-accent-color;
        width: 25%;
      }
    }
  }
}
</style>
