import { NextFunction, Request, Response } from 'express';
import { IError } from '../../interfaces/IError';

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.isAuth) {
    const error: IError = new Error('Unauthorized.');
    error.status = 401;
    next(error);
  }
  next();
};
