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
    height: 80%;
  }
}

@media (min-width: 1024px) {
  .auth-form-container {
    width: 65%;
    height: 80%;
  }
}

@media (min-width: 1280px) {
  .auth-form-container {
    width: 40%;
    height: 70%;
  }
}

@media (min-width: 1440px) {
  .auth-form-container {
    width: 37%;
    height: 70%;
  }
}

@media (min-width: 1920px) {
  .auth-form-container {
    width: 28%;
    height: 70%;
  }
}
</style>
