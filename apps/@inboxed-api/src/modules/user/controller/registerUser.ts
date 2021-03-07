import { Request, Response, NextFunction } from 'express';
import userService from '../user.service';

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, nickname, password } = req.body;

    const registeredUser = await userService.registerUser(email, nickname, password);
    const response = { body: { user: registeredUser }, status: 201, message: 'User created.' };

    req.session.userId = registeredUser.id;
    req.session.isAuth = true;

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};
