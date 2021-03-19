<template>
  <div class="app">
    <AppToolbar />
    <div class="content">
      <AppSidebar />
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppToolbar from './components/common/AppToolbar.vue';
import AppSidebar from './components/common/AppSidebar.vue';

export default defineComponent({
  components: {
    AppToolbar,
    AppSidebar,
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
  display: flex;
}
</style>
