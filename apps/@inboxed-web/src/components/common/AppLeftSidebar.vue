<template>
  <div class="left-sidebar">
    <Servers />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Servers from '../sidebar/Servers.vue';

export default defineComponent({
  components: {
    Servers,
  },
});
</script>

<style scoped lang="scss">
.left-sidebar {
  background: $primary-color-darker;
  height: calc(100vh - #{$toolbar-height});
  max-width: 6vw;
}
</style>
