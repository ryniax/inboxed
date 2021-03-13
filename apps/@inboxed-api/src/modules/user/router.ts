import express from 'express';
import userController from './user.controller';
import userValidator from './user.validator';
import { checkValidation } from '../../utils/validation/validationChecker';
import { middlewares } from '../../middlewares';

const router = express.Router();

router.post('/users', userValidator.registerUserValidation, checkValidation, userController.registerUser);
router.put(
  '/users/me',
  middlewares.isAuth,
  userValidator.registerUserValidation,
  checkValidation,
  userController.registerUserFromGuest,
);
router.post('/users/guest', userController.registerGuest);
router.get('/users/session', middlewares.isAuth, userController.getSessionUser);
router.post('/users/session', userValidator.loginUserValidation, checkValidation, userController.loginUser);

export default router;
