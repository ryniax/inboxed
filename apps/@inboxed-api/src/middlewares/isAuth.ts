import { NextFunction, Request, Response } from 'express';
import { HTTPError } from '../utils/errors/httpError';

export default (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.isAuth) {
    const error = new HTTPError('Unauthorized', 401);
    next(error);
  }
  next();
};
