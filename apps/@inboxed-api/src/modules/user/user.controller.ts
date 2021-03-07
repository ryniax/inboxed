import { Request, Response, NextFunction } from 'express';
import { SendResponse } from '../../utils/response';
import userService from './user.service';

const registerGuest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const guest = await userService.registerGuest();

    req.session.userId = guest.id;
    req.session.isAuth = true;

    SendResponse(res, guest, 201, 'Guest created.');
  } catch (error) {
    next(error);
  }
};

const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, nickname, password } = req.body;

    const user = await userService.registerUser(email, nickname, password);

    req.session.userId = user.id;
    req.session.isAuth = true;

    SendResponse(res, user, 201, 'User created.');
  } catch (error) {
    next(error);
  }
};

const registerUserFromGuest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, nickname, password } = req.body;
    const { userId } = req.session;

    const user = await userService.registerUserFromGuest(email, nickname, password, userId as number);

    SendResponse(res, user, 200, 'User updated.');
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const user = await userService.loginUser(email, password);

    req.session.userId = user.id;
    req.session.isAuth = true;

    SendResponse(res, user, 200, 'User logged in.');
  } catch (error) {
    next(error);
  }
};

const getUserFromSession = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.session;

    const user = await userService.getUser(userId as number);

    SendResponse(res, user, 200, 'User found.');
  } catch (error) {
    next(error);
  }
};

export default {
  registerGuest,
  registerUser,
  loginUser,
  getUserFromSession,
  registerUserFromGuest,
};
