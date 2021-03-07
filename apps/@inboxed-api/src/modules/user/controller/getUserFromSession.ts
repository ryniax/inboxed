import { Request, Response, NextFunction } from 'express';
import userService from '../user.service';

export const getUserFromSession = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.session;

    const user = await userService.getUser(userId as number);
    const response = { body: { user }, status: 200, message: 'User found.' };

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
