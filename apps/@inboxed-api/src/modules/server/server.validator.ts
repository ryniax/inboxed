import { check } from 'express-validator';

const createServerValidation = [check('name').notEmpty().withMessage('Server name is required')];

export default {
  createServerValidation,
};
