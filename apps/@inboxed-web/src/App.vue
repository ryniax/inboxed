<template>
  <div class="app">
    <AppToolbar />
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppToolbar from './components/common/AppToolbar.vue';

export default defineComponent({
  components: {
    AppToolbar,
  },
});
</script>

<style scoped lang="scss">
.app {
  height: 100vh;
  width: 100vw;
  background-color: $secondary-color;
}
</style>
