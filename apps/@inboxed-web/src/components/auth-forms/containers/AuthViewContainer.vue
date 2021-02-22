<template>
  <div class="login-view">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.login-view {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url('~@/assets/backgrounds/login-register-background.svg');
  background-size: cover;
}
</style>
