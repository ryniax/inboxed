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
  min-height: 100vh;
  padding: 2.5rem;
}

@media (min-width: 1024px) {
  .auth-form-container {
    max-width: 40%;
    min-height: fit-content;
  }
}
</style>
