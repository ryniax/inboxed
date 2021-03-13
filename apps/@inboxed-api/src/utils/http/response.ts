/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';

export const SendResponse = (res: Response, payload: any, status: number, message: string) => {
  res.status(status).json({
    body: payload,
    message,
  });
};
