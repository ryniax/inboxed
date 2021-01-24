import { Server, Socket } from 'socket.io';

export const initializeSocketEvents = (socketIO: Server): void => {
  socketIO.on('connection', (socket: Socket) => {
    console.log(`Socket with ID ${socket.id} connected.`);
  });
};
