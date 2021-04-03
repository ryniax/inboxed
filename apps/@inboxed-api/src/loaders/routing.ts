import { Application } from 'express';
import userRouter from '../modules/user/router';
import serverRouter from '../modules/server/router';

export const Routing = (app: Application) => {
  app.use('/api/v1', userRouter);
  app.use('/api/v1', serverRouter);
  return app;
};
