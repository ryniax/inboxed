<template>
  <div class="server">
    <Channels />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import Channels from '../components/sidebar/Channels.vue';

export default defineComponent({
  components: {
    Channels,
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
  width: 100%;
  height: 100%;
}
</style>
