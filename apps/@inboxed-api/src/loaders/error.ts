import { Application } from 'express';
import { middlewares } from '../middlewares';

export const ErrorHandler = (app: Application) => {
  app.use(middlewares.notFoundErrorHandler);
  app.use(middlewares.httpErrorHandler);
  return app;
};
