import { Request, Response, NextFunction } from 'express';
import { ApplicationError } from '../../utils/errors';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (err: ApplicationError, req: Request, res: Response, next: NextFunction): void => {
  res.status(err.status || 500);
  res.json([{ msg: err.message, status: err.status }]);
};
