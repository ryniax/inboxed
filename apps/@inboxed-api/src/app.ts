import express from 'express';
import http from 'http';
import helmet from 'helmet';
import middlewares from './api/middlewares/index';
import userRouter from './api/routes/userRouter';

import { connectDatabase } from './database/connection';
import { errorHandler, notFoundHandler } from './api/middlewares/errorHandler';

const app = express();

connectDatabase();

app.use(helmet());
app.use(middlewares.morgan);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(middlewares.expressSession);

app.use('/api/v1', userRouter);

app.use(notFoundHandler);
app.use(errorHandler);

export const httpServer = http.createServer(app);
