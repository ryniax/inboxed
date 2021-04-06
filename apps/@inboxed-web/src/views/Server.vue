<template>
  <div class="server">
    <h1>Super server</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();

    onMounted(() => console.log(route));
  },
});
</script>

<style scoped lang="scss">
.server {
  width: 100%;
  height: 100%;
}
</style>
