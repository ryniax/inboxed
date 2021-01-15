import { server } from './app';
import { Server, Socket } from 'socket.io';

const socketIO = new Server(server, {
    cors: {
        origin: 'http://localhost:8080',
        methods: ['GET', 'POST'],
        credentials: true
    }
});

socketIO.on("connection", (socket: Socket) => {
    console.log(`Socket with ID ${socket.id} connected.`);
})

const PORT = 3000;
const NODE_ENV = 'development';

server.listen(PORT, async () => {
    console.log(`Server is listening on http://localhost:${PORT} in ${NODE_ENV} mode`);
});