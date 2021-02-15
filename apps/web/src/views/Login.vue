<template>
  <div class="login">
    {{ $t('login') }}
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.login {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/backgrounds/login-register-background.svg');
  background-size: cover;
}
</style>
