import { Request, Response, NextFunction } from 'express';
import userService from '../user.service';

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const authenticatedUser = await userService.loginUser(email, password);
    const response = { body: { user: authenticatedUser }, status: 200, message: 'User logged in.' };

    req.session.userId = authenticatedUser.id;
    req.session.isAuth = true;

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
