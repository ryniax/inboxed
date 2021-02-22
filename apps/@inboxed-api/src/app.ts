import express from 'express';
import http from 'http';
import helmet from 'helmet';
import middlewares from './api/middlewares/index';

import { connectDatabase } from './database/connection';

const app = express();
connectDatabase();

app.use(helmet());
app.use(middlewares.morgan);

export const httpServer = http.createServer(app);
