<template>
  <div class="server">
    <Channels />
    <CurrentChannel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import Channels from '../components/sidebar/Channels.vue';
import CurrentChannel from '../components/CurrentChannel.vue';

export default defineComponent({
  components: {
    Channels,
    CurrentChannel,
  },
  setup() {
    const route = useRoute();

    return {
      route,
    };
  },
});
</script>

<style scoped lang="scss">
.server {
  display: flex;
  width: 100%;
  height: 100%;
}
</style>
