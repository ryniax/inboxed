import { httpServer } from './app';
import { initializeSocketEvents } from './events/index';
import { accessEnv } from './utils/accessEnv';
import { createSocketInstance } from './utils/createSocketInstance';

const PORT = accessEnv('PORT', 3000);
const NODE_ENV = accessEnv('NODE_ENV', 'development');

const socketIO = createSocketInstance(httpServer);
initializeSocketEvents(socketIO);

httpServer.listen(PORT, async () => {
  console.log(`Server is listening on http://localhost:${PORT} in ${NODE_ENV} mode`);
});
