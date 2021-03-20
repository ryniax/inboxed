<template>
  <div class="app">
    <AppToolbar />
    <div class="content">
      <AppLeftSidebar />
      <router-view />
      <AppRightSidebar />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import AppToolbar from './components/common/AppToolbar.vue';
import AppLeftSidebar from './components/common/AppLeftSidebar.vue';
import AppRightSidebar from './components/common/AppRightSidebar.vue';

export default defineComponent({
  components: {
    AppToolbar,
    AppLeftSidebar,
    AppRightSidebar,
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
  width: 100%;
  height: calc(100vh - #{$toolbar-height});
  display: flex;
}
</style>
