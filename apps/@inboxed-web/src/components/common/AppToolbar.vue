<template>
  <div class="app-toolbar">
    <div class="app-toolbar__logo">
      <span>inboxed</span>
    </div>
    <div class="app-toolbar__info">
      <div class="app-toolbar__info--language">
        <img src="../../assets/icons/us-flag.svg" alt="" />
      </div>
      <div class="app-toolbar__info--status">
        <div></div>
        <span>online</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.app-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: $toolbar-height;
  background-color: $primary-color-darker;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.5);

  &__logo {
    height: 100%;
    max-width: 6vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.5rem;
    span {
      font-family: $primary-font;
      color: white;
      font-size: 1.1rem;
      text-transform: uppercase;
      font-weight: 600;
    }
  }

  &__info {
    display: flex;
    align-items: center;
    &--language {
      img {
        margin-top: 0.1rem;
        margin-right: 2rem;
      }
    }
    &--status {
      margin-right: 1.5rem;
      display: flex;
      align-items: center;

      div {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: $active-color;
        margin-right: 0.8rem;
      }

      span {
        font-family: $primary-font;
        color: white;
        font-size: 1.2rem;
        text-transform: uppercase;
        font-weight: 600;
      }
    }
  }
}
</style>
