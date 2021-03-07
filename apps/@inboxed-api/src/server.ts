import { httpServer } from './app';
import { initializeSocketEvents } from './events/index';
import { accessEnv } from './utils/accessEnv';
import { createSocketServer } from './providers/socketServer';
import Logger from './providers/logger';

const PORT = accessEnv('PORT', 3000);
const NODE_ENV = accessEnv('NODE_ENV', 'development');

const socketIO = createSocketServer(httpServer);
initializeSocketEvents(socketIO);

httpServer.listen(PORT, async () => {
  Logger.info(`Server is listening on http://localhost:${PORT} in ${NODE_ENV} mode`);
});
