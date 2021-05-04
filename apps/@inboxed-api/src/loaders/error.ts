import { Application } from 'express';
import * as Sentry from '@sentry/node';
import { middlewares } from '../middlewares';

export const ErrorHandler = (app: Application) => {
  app.use(Sentry.Handlers.errorHandler());
  app.use(middlewares.notFoundErrorHandler);
  app.use(middlewares.httpErrorHandler);
  return app;
};
