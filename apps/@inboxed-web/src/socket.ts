import { io } from 'socket.io-client';

export const establishSocketConnection = () => {
  const socket = io('http://localhost:3000');
  return socket;
};
