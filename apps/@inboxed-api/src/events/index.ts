import { Server, Socket } from 'socket.io';
import { SocketEvent } from '@inboxed/common';
import Logger from '../providers/logger';
import { channelEvents } from './channelEvents';

export const initializeSocketEvents = (socketIO: Server): void => {
  socketIO.on(SocketEvent.SERVER_CONNECT, (socket: Socket) => {
    Logger.info(`Socket with ID ${socket.id} connected.`);
    channelEvents(socket, socketIO);

    socket.on(SocketEvent.SERVER_DISCONNECT, () => {
      Logger.info(`Socket with ID ${socket.id} disconnected.`);
    });
  });
};
