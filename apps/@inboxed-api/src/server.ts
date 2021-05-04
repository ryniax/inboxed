import express from 'express';
import http from 'http';
import { initializeSocketEvents } from './events/index';
import { accessEnv } from './utils/accessEnv';
import { createSocketServer } from './providers/socketServer';
import Logger from './providers/logger';
import { connectDatabase } from './database/connection';
import { Middlewares } from './loaders/middlewares';
import { Routing } from './loaders/routing';
import { ErrorHandler } from './loaders/error';
import { InitSentry } from './loaders/sentry';

export const runApp = async () => {
  const app = express();
  InitSentry(app);

  const PORT = accessEnv('PORT', 3000);
  const NODE_ENV = accessEnv('NODE_ENV', 'development');

  const httpServer = http.createServer(app);
  const socketServer = createSocketServer(httpServer);

  const connection = await connectDatabase();
  Middlewares(app);
  Routing(app);
  ErrorHandler(app);

  httpServer.listen(PORT, async () => {
    initializeSocketEvents(socketServer);
    Logger.info(`Server is listening on http://localhost:${PORT} in ${NODE_ENV} mode`);
  });
};
