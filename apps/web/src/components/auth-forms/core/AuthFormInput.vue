<template>
  <div class="auth-form-input">
    <span class="auth-form-input__label">{{ label }}</span>
    <div class="auth-form-input__background">
      <img :src="getIconPath" />
      <input :type="inputType" />
    </div>
    <span class="auth-form-input__label auth-form-input__label--under" v-if="underLabel">{{
      underLabel
    }}</span>
  </div>
</template>

<script>
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { defineComponent, computed } from 'vue';

export default defineComponent({
  props: {
    iconName: {
      type: String,
      required: false,
    },
    inputType: {
      type: String,
      required: true,
      default: 'text',
    },
    label: {
      type: String,
      required: true,
    },
    underLabel: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const getIconPath = computed(() => require(`@/assets/icons/${props.iconName}.svg`));

    return {
      getIconPath,
    };
  },
});
</script>

<style scoped lang="scss">
.auth-form-input {
  margin-bottom: 2.4rem;
  width: 100%;

  &__background {
    display: flex;
    align-items: center;
    margin-top: 0.4rem;
    height: 4rem;
    background-color: $primary-color;
    border: 1px solid black;

    img {
      padding: 0 8px;
    }

    input {
      margin-left: 0.3rem;
      padding-right: 0.8rem;
      height: 100%;
      width: 100%;
      background: none;
      border: none;
      outline: none;
      color: white;
      font-family: $secondary-font;
      font-weight: 600;
    }
  }

  &__label {
    color: white;
    font-size: 1.4rem;
    text-transform: uppercase;
    font-family: $secondary-font;
    font-weight: 700;

    &--under {
      display: inline-block;
      margin-top: 0.6rem;
      font-size: 1rem;
      text-transform: none;
      color: $secondary-accent-color;
      cursor: pointer;
    }

    &--under:hover {
      transition: 0.15s;
      color: $primary-accent-color;
    }
  }
}
</style>
