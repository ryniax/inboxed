<template>
  <div class="auth-form-container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.auth-form-container {
  background-color: $secondary-color;
  width: 100%;
  height: 100%;
  padding: 2rem;
}

@media (min-width: 760px) {
  .auth-form-container {
    width: 80%;
    height: unset;
  }
}

@media (min-width: 1024px) {
  .auth-form-container {
    width: 65%;
    height: unset;
  }
}

@media (min-width: 1280px) {
  .auth-form-container {
    width: 40%;
  }
}
</style>
