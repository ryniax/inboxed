import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { middlewares } from '../middlewares';

export const Middlewares = async (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
  app.use(helmet());
  app.use(morgan('dev'));
  app.use(middlewares.session);

  return app;
};
