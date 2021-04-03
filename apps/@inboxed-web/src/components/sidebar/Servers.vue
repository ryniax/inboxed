<template>
  <div class="servers">
    <div class="servers__dashboard-container">
      <div class="servers__dashboard-container__dashboard-icon">
        <img src="../../assets/icons/home-icon.svg" alt="" />
      </div>
    </div>
    <div class="servers__divider"></div>
    <div class="servers__server-list">
      <div v-for="(server, index) in userServers" :key="index" class="servers__server-list__server">
        <span>{{ index }}</span>
      </div>
      <div class="servers__server-list__server-action" @click="switchCreateServerModal">
        <img src="../../assets/icons/plus-icon.svg" alt="" />
      </div>
      <div class="servers__server-list__server-action">
        <img src="../../assets/icons/search-icon.svg" alt="" />
      </div>
    </div>
    <CreateServerModal @create-server-modal-close="switchCreateServerModal" />
  </div>
</template>

<script>
import { computed, defineComponent, onMounted } from 'vue';
import { getModule } from 'vuex-module-decorators';
import Modals from '../../store/ModalsModule';
import Servers from '../../store/ServersModule';
import CreateServerModal from '../modals/CreateServerModal.vue';

export default defineComponent({
  components: {
    CreateServerModal,
  },
  setup() {
    const ModalsModule = getModule(Modals);
    const ServersModule = getModule(Servers);

    const switchCreateServerModal = () => ModalsModule.switchNewServerModal();
    const userServers = computed(ServersModule.getServers);

    onMounted(ServersModule.getServers);

    return {
      switchCreateServerModal,
      userServers,
    };
  },
});
</script>

<style scoped lang="scss">
.servers {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem 1.5rem;

  &__dashboard-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    &__dashboard-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.2rem;
      border-radius: 20px;
      background: $secondary-color;
      cursor: pointer;
      transition: 0.2s;
    }

    &__dashboard-icon:hover {
      transform: scale(0.93);
    }
  }

  &__divider {
    margin: 1.3rem 0;
    width: 100%;
    background-color: white;
    height: 1px;
  }

  &__server-list {
    &__server {
      position: relative;
      padding: 2.4rem;
      transition: 0.2s;
      cursor: pointer;
      margin-bottom: 1.3rem;
      border-radius: 50%;
      background: $secondary-color;

      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: $primary-font;
        color: #eeeeee;
        font-size: 1.4rem;
        font-weight: 700;
      }
    }

    &__server:hover {
      transform: scale(0.93);
    }

    &__server-action {
      position: relative;
      padding: 2.4rem;
      transition: 0.2s;
      cursor: pointer;
      margin-bottom: 1.3rem;
      border-radius: 50%;
      background: $secondary-color;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &__server-action:hover {
      transform: scale(0.93);
    }
  }
}
</style>
