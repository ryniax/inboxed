import express from 'express';
import http from 'http';
import swaggerUI from 'swagger-ui-express';
import swaggerDocs from '../swagger.json';
import { connectDatabase } from './database/connection';
import { middlewares } from './middlewares/index';
import userRouter from './modules/user/router';
import serverRouter from './modules/server/router';

const app = express();
connectDatabase();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(middlewares.helmet);
app.use(middlewares.session);
app.use(middlewares.httpLogger);

app.use('/api/v1', userRouter);
app.use('/api/v1', serverRouter);
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs, { explorer: true }));

app.use(middlewares.notFoundErrorHandler);
app.use(middlewares.httpErrorHandler);

export const httpServer = http.createServer(app);
