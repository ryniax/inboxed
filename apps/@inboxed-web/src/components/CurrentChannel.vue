<template>
  <div class="current-channel">
    <div class="current-channel__messages">
      <div
        class="current-channel__messages__message"
        v-for="(message, index) in messages"
        :key="index"
      >
        <span class="current-channel__messages__message--author">{{ message.author }}</span>
        <span class="current-channel__messages__message--text">{{ message.text }}</span>
      </div>
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
import { computed, defineComponent, reactive } from 'vue';
import { getModule } from 'vuex-module-decorators';
import Servers from '../store/ServersModule';
import { socket } from '../main';

export default defineComponent({
  setup() {
    const ServersModule = getModule(Servers);

    const messages = reactive([
      {
        author: 'gLenczuk',
        text: 'Elo, jak tam? Wszystko w porządku?',
      },
      {
        author: 'Erres',
        text: 'Najak, csik?',
      },
      {
        author: 'gLenczuk',
        text: 'CCCCCCCCCCCCCCCCCCCC',
      },
    ]);

    const currentChannel = computed(() => ServersModule.getCurrentChannel);
    const sendMessage = () => {
      socket.emit('SEND_MESSAGE', {
        server: ServersModule.getCurrentServer.name,
        channelId: ServersModule.getCurrentChannel.id,
        text: 'new message',
        author: 'gLenczuk',
      });
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onMessageSent = (data: any) => {
      console.log(data);
      console.log(ServersModule.getChannelsMessages);
    };

    socket.on('ON_MESSAGE_SENT', onMessageSent);

    return {
      currentChannel,
      sendMessage,
      messages,
    };
  },
});
</script>

<style scoped lang="scss">
.current-channel {
  width: 80%;
  color: white;
  padding: 25px;
  display: flex;
  flex-direction: column;

  &__messages {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-grow: 1;
    padding: 20px 5px;
    width: 100%;

    &__message {
      padding: 8px;
      display: flex;
      flex-direction: column;
      font-family: $primary-font;
      border-radius: 10px;
      transition: 0.1s;

      &:hover {
        background-color: $primary-color;
      }

      &--author {
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 5px;
      }

      &--message {
        font-size: 1.6rem;
        -ms-word-break: break-all;
        word-break: break-all;
      }
    }
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
