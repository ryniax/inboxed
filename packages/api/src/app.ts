import express from 'express';
import http from 'http';
import cors from 'cors';

const app = express();
app.use(cors());

export const server = http.createServer(app);