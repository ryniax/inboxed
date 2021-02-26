import { Request, Response, NextFunction } from 'express';
import userService from './userService';

const createUser = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const message = userService.createUser();
    res.status(200).json(message);
  } catch (error) {
    next(error);
  }
};

export default {
  createUser,
};
