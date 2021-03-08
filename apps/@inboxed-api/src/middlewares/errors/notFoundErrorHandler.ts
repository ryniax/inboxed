import { Request, Response, NextFunction } from 'express';
import { ApplicationError } from '../../utils/errors';
import { HTTPError } from '../../utils/errors/httpError';

export default (req: Request, res: Response, next: NextFunction): void => {
  const error: ApplicationError = new HTTPError('API route not found');
  next(error);
};
