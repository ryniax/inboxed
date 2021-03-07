import { Request, Response, NextFunction } from 'express';
import userService from '../user.service';

export const registerUserFromGuest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, nickname, password } = req.body;
    const { userId } = req.session;

    const updatedUser = await userService.registerUserFromGuest(email, nickname, password, userId as number);
    const response = { body: { user: updatedUser }, status: 200, message: 'User updated.' };

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
