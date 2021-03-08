import express from 'express';
import http from 'http';
import { middlewares } from './middlewares/index';
import userRouter from './modules/user/router';

import { connectDatabase } from './database/connection';

const app = express();
connectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(middlewares.helmet);
app.use(middlewares.session);
app.use(middlewares.httpLogger);

app.use('/api/v1', userRouter);

app.use(middlewares.notFoundErrorHandler);
app.use(middlewares.httpErrorHandler);

export const httpServer = http.createServer(app);
