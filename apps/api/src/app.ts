import express from 'express';
import http from 'http';
import morgan from 'morgan';
import { connectDatabase } from './database/connection';

const app = express();

connectDatabase();

app.use(morgan('dev'));

export const server = http.createServer(app);
