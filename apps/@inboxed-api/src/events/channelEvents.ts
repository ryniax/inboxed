import { SocketEvent } from '@inboxed/common';
import { Socket } from 'socket.io';

export const channelEvents = (socket: Socket): void => {
  socket.on(SocketEvent.JOIN_SERVER, (serverName: string) => {
    socket.join(serverName);
  });

  socket.on(SocketEvent.LEAVE_SERVER, (serverName: string) => {
    socket.leave(serverName);
  });
};
