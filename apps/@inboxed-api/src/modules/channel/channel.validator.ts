import { check } from 'express-validator';

const createChannelValidation = [check('name').notEmpty().withMessage('Channel name is required')];

export default {
  createChannelValidation,
};
