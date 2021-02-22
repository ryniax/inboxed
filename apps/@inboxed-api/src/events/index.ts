import { Server, Socket } from 'socket.io';
import Logger from '../providers/logger';

export const initializeSocketEvents = (socketIO: Server): void => {
  socketIO.on('connection', (socket: Socket) => {
    Logger.info(`Socket with ID ${socket.id} connected.`);

    socket.on('disconnect', () => {
      Logger.info(`Socket with ID ${socket.id} disconnected.`);
    });
  });
};
