import { SocketEvent } from '@inboxed/common';
import { Server, Socket } from 'socket.io';

export const channelEvents = (socket: Socket, socketServer: Server): void => {
  socket.on(SocketEvent.JOIN_SERVER, (serverName: string) => {
    socket.join(serverName);
  });

  socket.on(SocketEvent.LEAVE_SERVER, (serverName: string) => {
    socket.leave(serverName);
  });

  socket.on(SocketEvent.SEND_MESSAGE, (data) => {
    socketServer.to(data.server).emit(SocketEvent.ON_MESSAGE_SENT, data);
  });
};
