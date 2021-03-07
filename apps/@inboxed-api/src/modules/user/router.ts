import express from 'express';
import userController from './user.controller';
import userValidator from './user.validator';
import { checkValidation } from '../../utils/validationChecker';
import { isAuth } from '../../middlewares/isAuth';

const router = express.Router();

const registerUserFromGuestValidationChain = [isAuth, userValidator.registerUserValidation, checkValidation];
const registerUserValidationChain = [userValidator.registerUserValidation, checkValidation];
const getUserValidationChain = [isAuth];
const loginUserValidationChain = [userValidator.loginUserValidation, checkValidation];

router.post('/user', ...registerUserValidationChain, userController.registerUser);
router.put('/user', ...registerUserFromGuestValidationChain, userController.registerUserFromGuest);
router.post('/user/guest', userController.registerGuest);
router.get('/user/session', ...getUserValidationChain, userController.getUserFromSession);
router.post('/user/session', ...loginUserValidationChain, userController.loginUser);

export default router;
