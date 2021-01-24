import express from 'express';
import http from 'http';
import { connectDatabase } from './database/connection';

const app = express();
connectDatabase();

export const httpServer = http.createServer(app);
