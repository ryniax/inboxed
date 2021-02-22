<template>
  <button :class="{ outline: outline }">
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    outline: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped lang="scss">
button {
  width: 100%;
  height: 50px;
  background: $primary-accent-color;
  border: none;
  outline: none;
  color: black;
  font-weight: 700;
  font-family: $secondary-font;
  font-size: 1.8rem;
  cursor: pointer;
  text-transform: uppercase;
}

.outline {
  background: none;
  border: 2px solid $primary-accent-color;
  color: white;
}
</style>
