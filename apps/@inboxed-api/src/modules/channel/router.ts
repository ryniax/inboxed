import express from 'express';
import channelController from './channel.controller';
import channelValidator from './channel.validator';
import { checkValidation } from '../../utils/validation/validationChecker';
import { middlewares } from '../../middlewares';

const router = express.Router();

router.post(
  '/channels',
  middlewares.isAuth,
  channelValidator.createChannelValidation,
  checkValidation,
  channelController.createChannel,
);

export default router;
