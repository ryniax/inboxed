import { Request, Response, NextFunction } from 'express';
import userService from '../user.service';

export const registerGuest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const guestAccount = await userService.registerGuest();
    const response = { body: guestAccount, status: 201, message: 'Guest created.' };

    req.session.userId = guestAccount.id;
    req.session.isAuth = true;

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};
