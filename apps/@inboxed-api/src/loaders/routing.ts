import { Application } from 'express';
import swaggerUI from 'swagger-ui-express';
import userRouter from '../modules/user/router';
import serverRouter from '../modules/server/router';
import swaggerDocs from '../../swagger.json';

export const Routing = (app: Application) => {
  app.use('/api/v1', userRouter);
  app.use('/api/v1', serverRouter);
  app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs, { explorer: true }));
  return app;
};
