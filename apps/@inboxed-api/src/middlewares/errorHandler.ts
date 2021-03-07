import { Request, Response, NextFunction } from 'express';
import { ExtendedError } from '../interfaces/ExtendedError';

export const notFoundHandler = (req: Request, res: Response, next: NextFunction): void => {
  const error: ExtendedError = new Error('API route not found');
  error.status = 404;
  next(error);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err: ExtendedError, req: Request, res: Response, next: NextFunction): void => {
  const error: ExtendedError = new Error(err.message);
  error.status = err.status || 500;

  res.status(error.status || 500);
  res.json([{ msg: error.message, status: error.status }]);
};
