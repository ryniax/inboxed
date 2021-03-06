import { Request, Response, NextFunction } from 'express';
import userService from './userService';

const createGuestAccount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const guestAccount = await userService.createGuest();
    const response = { body: guestAccount, status: 201, message: 'Guest created.' };

    req.session.userId = guestAccount.id;
    req.session.isAuth = true;

    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const registerUser = async (req: Request, res: Response, next: NextFunction) => {
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

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
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

const getUserFromSession = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.session;

    const user = await userService.getUser(userId as number);
    const response = { body: { user }, status: 200, message: 'User found.' };

    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

const registerUserFromGuest = async (req: Request, res: Response, next: NextFunction) => {
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

export default {
  createGuestAccount,
  registerUser,
  loginUser,
  getUserFromSession,
  registerUserFromGuest,
};
