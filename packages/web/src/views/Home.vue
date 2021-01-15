<template>
  <div>
    <span>{{ socketID }}</span>
  </div>
</template>

<script>
import { io } from 'socket.io-client';

export default {
  data() {
    return {
      socketID: null,
    };
  },
  mounted() {
    const socket = io('http://localhost:3000');

    socket.on('connect', data => {
      this.socketID = data.id;
    });
  },
};
</script>

<style></style>
