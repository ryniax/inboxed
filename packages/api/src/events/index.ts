import { Server, Socket } from "socket.io";

export const InitializeEvents = (socketIO: Server) => {
    socketIO.on("connection", (socket: Socket) => {
        console.log(`Socket with ID ${socket.id} connected.`);
    })
}