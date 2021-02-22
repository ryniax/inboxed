import { Server } from 'socket.io';
import http from 'http';

export const createSocketInstance = (httpServer: http.Server): Server => {
  const socketIO = new Server(httpServer, {
    cors: {
      origin: 'http://localhost:8080',
      credentials: true,
    },
  });

  return socketIO;
};
