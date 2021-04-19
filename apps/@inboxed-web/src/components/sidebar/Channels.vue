<template>
  <div v-if="currentServer" class="channels">
    <div class="channels__server-name">
      <h2 class="channels__server-name">
        {{ capitalize(currentServer.name) }}
      </h2>
    </div>

    <div class="channels__list">
      <h2 class="channels__list--title">
        channels
        <img
          @click="showNewChannelModal"
          class="channels__list--title__add-channel"
          src="../../assets/icons/plus-icon.svg"
          alt=""
        />
      </h2>

      <div
        class="channels__list--item"
        v-for="(channel, index) in currentServer.channels"
        :key="index"
        @click="goToChannel(channel)"
      >
        <span class="channels__list--item__channel-name"># {{ channel.name }}</span>
      </div>
    </div>
    <CreateChannelModal />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { getModule } from 'vuex-module-decorators';
import Servers from '../../store/ServersModule';
import Modals from '../../store/ModalsModule';
import capitalize from '../../utils/capitalize';
import CreateChannelModal from '../modals/CreateChannelModal.vue';

export default defineComponent({
  components: {
    CreateChannelModal,
  },
  setup() {
    const ServersModule = getModule(Servers);
    const ModalsModule = getModule(Modals);

    const currentServer = computed(() => ServersModule.getCurrentServer);
    const showNewChannelModal = () => ModalsModule.switchNewChannelModal();

    const goToChannel = (channel: any) => {
      ServersModule.setCurrentChannel(channel);
    };

    return {
      currentServer,
      capitalize,
      showNewChannelModal,
      goToChannel,
    };
  },
});
</script>

<style scoped lang="scss">
.channels {
  width: 20%;
  height: 100%;
  background-color: $primary-color;

  &__server-name {
    padding: 1.2rem 0;
    background-color: $primary-color-darker;
    h2 {
      color: white;
      font-family: $primary-font;
      padding: 0 1.8rem;
    }
  }

  &__list {
    padding: 0 1.5rem;
    margin-top: 1rem;

    &--title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-transform: uppercase;
      font-weight: 700;
      color: $secondary-accent-color;
      font-family: $primary-font;
      padding: 0 0.3rem;
      margin-bottom: 0.9rem;

      &__add-channel {
        width: 1.6rem;
        height: 1.6rem;
        cursor: pointer;
      }
    }

    &--item {
      display: block;
      padding: 0.3rem 0.3rem;
      margin-top: 0.3rem;
      color: lightgray;
      font-size: 1.4rem;
      font-family: $primary-font;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.15s;
    }

    &--item:hover {
      background-color: gray;
    }
  }
}
</style>
