<template>
  <div class="currentChannel">
    {{ currentChannel }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { getModule } from 'vuex-module-decorators';
import Servers from '../store/ServersModule';

export default defineComponent({
  setup() {
    const ServersModule = getModule(Servers);

    const currentChannel = computed(() => ServersModule.getCurrentChannel);

    return {
      currentChannel,
    };
  },
});
</script>

<style scoped lang="scss">
.currentChannel {
  width: 80%;
  color: white;
}
</style>
