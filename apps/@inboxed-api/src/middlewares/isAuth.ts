import { NextFunction, Request, Response } from 'express';
import { ExtendedError } from '../interfaces/ExtendedError';

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.isAuth) {
    const error: ExtendedError = new Error('Unauthorized.');
    error.status = 401;
    next(error);
  }
  next();
};
