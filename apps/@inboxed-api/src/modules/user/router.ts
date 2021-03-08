import express from 'express';
import userController from './user.controller';
import userValidator from './user.validator';
import { checkValidation } from '../../utils/validation/validationChecker';
import { middlewares } from '../../middlewares';

const router = express.Router();

router.post('/user', userValidator.registerUserValidation, checkValidation, userController.registerUser);

router.put(
  '/user',
  middlewares.isAuth,
  userValidator.registerUserValidation,
  checkValidation,
  userController.registerUserFromGuest,
);

router.post('/user/guest', userController.registerGuest);

router.get('/user/session', middlewares.isAuth, userController.getSessionUser);

router.post('/user/session', userValidator.loginUserValidation, checkValidation, userController.loginUser);

export default router;
