import express from 'express';
import userController from '../../components/user/userController';
import { loginUserValidation, registerUserValidation } from '../../components/user/userValidator';
import { checkValidation } from '../../utils/validationChecker';
import { isAuth } from '../middlewares/isAuth';

const router = express.Router();

router.put('/user', isAuth, registerUserValidation, checkValidation, userController.registerUserFromGuest);
router.post('/user', registerUserValidation, checkValidation, userController.registerUser);
router.post('/user/guest', userController.createGuestAccount);
router.get('/user/session', isAuth, userController.getUserFromSession);
router.post('/user/session', loginUserValidation, checkValidation, userController.loginUser);

export default router;
