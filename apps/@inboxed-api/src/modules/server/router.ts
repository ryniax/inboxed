import express from 'express';
import serverController from './server.controller';
import serverValidator from './server.validator';
import { checkValidation } from '../../utils/validation/validationChecker';
import { middlewares } from '../../middlewares';

const router = express.Router();

router.post(
  '/servers',
  middlewares.isAuth,
  serverValidator.createServerValidation,
  checkValidation,
  serverController.createServer,
);
router.get('/servers/me', middlewares.isAuth, serverController.getServersForUser);
router.get('/servers', middlewares.isAuth, serverController.getAllServers);
router.post('/servers/users', middlewares.isAuth, serverController.joinServer);

export default router;
