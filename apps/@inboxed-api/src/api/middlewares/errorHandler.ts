import { Request, Response, NextFunction } from 'express';
import { IError } from '../../interfaces/IError';

export const notFoundHandler = (req: Request, res: Response, next: NextFunction): void => {
  const error: IError = new Error('API route not found');
  error.status = 404;
  next(error);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err: IError, req: Request, res: Response, next: NextFunction): void => {
  const error: IError = new Error(err.message);
  error.status = err.status || 500;

  res.status(error.status || 500);
  res.json([{ msg: error.message, status: error.status }]);
};
