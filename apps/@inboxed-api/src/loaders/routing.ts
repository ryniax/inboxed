import { Application } from 'express';
import userRouter from '../modules/user/router';
import serverRouter from '../modules/server/router';
import channelRouter from '../modules/channel/router';

export const Routing = (app: Application) => {
  app.use('/api/v1', userRouter);
  app.use('/api/v1', serverRouter);
  app.use('/api/v1', channelRouter);
  app.get('/debug-sentry', (req, res) => {
    throw new Error('My first Sentry error!');
  });
  return app;
};
