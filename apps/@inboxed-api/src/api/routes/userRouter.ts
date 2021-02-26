import express from 'express';
import userController from '../../modules/user/userController';

const router = express.Router();

router.post('/user', userController.createUser);

export default router;
