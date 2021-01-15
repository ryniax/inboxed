<template>
  <div>
    <span>Socket connected with ID: {{ socketID }}</span>
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

    socket.on('connect', () => {
      this.socketID = socket.id;
    });
  },
};
</script>

<style></style>
