<template>
  <teleport v-if="isOpen" to="#modals">
    <div class="modal">
      <h1 class="modal__title">Create a new channel</h1>
      <span class="modal__text">You can create a new channel on your server</span>
      <form class="modal__form">
        <div>
          <span>channel name</span>
          <input v-model="channelName" type="text" placeholder="eg. Fluffy Goggles" />
        </div>
      </form>
      <div class="modal__actions">
        <span @click="handleClose">Back</span>
        <button @click="createChannel">Create</button>
      </div>
    </div>
  </teleport>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import { getModule } from 'vuex-module-decorators';
import Modals from '../../store/ModalsModule';
import Servers from '../../store/ServersModule';

export default defineComponent({
  setup() {
    const ModalsModule = getModule(Modals);
    const ServersModule = getModule(Servers);
    const channelName = ref('');

    const handleClose = () => ModalsModule.switchNewChannelModal();
    const isOpen = computed(() => ModalsModule.newChannelModalValue);

    const createChannel = async () => {
      try {
        await ServersModule.createChannel(channelName.value);
        handleClose();
      } catch (error) {
        console.log(error);
      }
    };

    return {
      handleClose,
      isOpen,
      channelName,
      createChannel,
    };
  },
});
</script>

<style scoped lang="scss">
.modal {
  border-radius: 10px;
  color: white;
  font-family: $primary-font;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: $primary-color-darker;
  z-index: 9999;

  &__title {
    text-align: center;
    font-size: 2.6rem;
    padding: 2.2rem 4rem 0.5rem 4rem;
  }

  &__text {
    padding: 0 4rem;
    font-size: 1.6rem;
  }

  &__form {
    margin-top: 4rem;
    padding: 0 4rem;

    div {
      display: flex;
      flex-direction: column;

      span {
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 0.5rem;
      }

      input {
        padding: 1.2rem;
        height: 100%;
        width: 100%;

        outline: none;
        color: white;
        font-family: $secondary-font;
        font-weight: 600;
        background-color: $primary-color;
        border: 1px solid black;
      }
    }
  }

  &__actions {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 4rem;
    padding: 4rem 4rem 4rem 4rem;

    span {
      font-weight: 700;
      cursor: pointer;
      font-size: 1.4rem;
      text-transform: uppercase;
    }

    button {
      cursor: pointer;
      padding: 0.8rem 2.4rem;
      background: $primary-accent-color;
      color: black;
      font-size: 1.4rem;
      font-family: $primary-font;
      font-weight: 700;
      text-transform: uppercase;
      border: none;
      outline: none;
      border-radius: 5px;
    }
  }
}
</style>
