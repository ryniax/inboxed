import express from 'express';
import http from 'http';
import helmet from 'helmet';

import { connectDatabase } from './database/connection';

const app = express();
connectDatabase();

app.use(helmet());

export const httpServer = http.createServer(app);
