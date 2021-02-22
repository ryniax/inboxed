<template>
  <div class="buttons-divider">
    <div class="buttons-divider__line"></div>
    <span class="buttons-divider__text">
      <slot></slot>
    </span>
    <div class="buttons-divider__line"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.buttons-divider {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem 0;

  &__line {
    width: 25%;
    height: 1px;
    background-color: $secondary-accent-color;
  }

  &__text {
    font-family: $secondary-font;
    color: $secondary-accent-color;
    font-weight: bold;
    font-size: 1rem;
  }
}

@media (min-width: 1280px) {
  .buttons-divider {
    &__line {
      width: 30%;
    }

    &__text {
      font-size: 1.2rem;
    }
  }
}

@media (min-width: 1440px) {
  .buttons-divider {
    &__line {
      width: 27%;
    }

    &__text {
      font-size: 1.2rem;
    }
  }
}
</style>
