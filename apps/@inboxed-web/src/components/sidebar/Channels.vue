<template>
  <div class="channels">
    <div class="channels__server-name">
      <h2 class="channels__server-name">{{ capitalize(currentServer.name) }}</h2>
    </div>
    <div class="channels__list">
      <h2 class="channels__list--title">channels</h2>
      <div class="channels__list--item" v-for="(channel, index) in 3" :key="index">
        <span class="channels__list--item__channel-name"># general</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { getModule } from 'vuex-module-decorators';
import Servers from '../../store/ServersModule';
import capitalize from '../../utils/capitalize';

export default defineComponent({
  setup() {
    const ServersModule = getModule(Servers);

    const currentServer = computed(() => ServersModule.getCurrentServer);

    return {
      currentServer,
      capitalize,
    };
  },
});
</script>

<style scoped lang="scss">
.channels {
  width: 15vw;
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
      text-transform: uppercase;
      font-weight: 700;
      color: $secondary-accent-color;
      font-family: $primary-font;
      padding: 0 0.3rem;
      margin-bottom: 0.9rem;
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
