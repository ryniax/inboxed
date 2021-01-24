import { Server } from 'socket.io';
import { server } from './app';
import { InitializeEvents } from './events/index';
import { accessEnv } from './utils/accessEnv';

const socketIO = new Server(server, {
  cors: {
    origin: 'http://localhost:8080',
    credentials: true,
  },
});

InitializeEvents(socketIO);

const PORT = accessEnv('PORT', 3000);
const NODE_ENV = accessEnv('NODE_ENV', 'development');

server.listen(PORT, async () => {
  console.log(`Server is listening on http://localhost:${PORT} in ${NODE_ENV} mode`);
});
