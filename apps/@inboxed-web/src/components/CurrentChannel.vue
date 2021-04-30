<template>
  <div class="current-channel">
    <div class="current-channel__messages">
      messages
    </div>
    <div class="current-channel__input">
      <textarea
        placeholder="Type your message here..."
        @keydown.prevent.enter="sendMessage"
        rows="6"
        :resize="false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { getModule } from 'vuex-module-decorators';
import Servers from '../store/ServersModule';

export default defineComponent({
  setup() {
    const ServersModule = getModule(Servers);

    const currentChannel = computed(() => ServersModule.getCurrentChannel);
    const sendMessage = () => console.log('sent');

    return {
      currentChannel,
      sendMessage,
    };
  },
});
</script>

<style scoped lang="scss">
.current-channel {
  width: 80%;
  color: white;
  padding: 12px;
  display: flex;
  flex-direction: column;

  &__messages {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-grow: 1;
    padding: 20px 5px;
    width: 100%;
  }

  &__input {
    width: 100%;

    textarea {
      width: 100%;
      resize: none;
      padding: 14px;
      border-radius: 10px;
      color: white;
      background-color: $primary-color;
      outline: none;
    }
  }
}
</style>
