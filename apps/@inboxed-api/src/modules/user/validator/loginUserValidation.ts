import { check } from 'express-validator';

export const loginUserValidation = [
  check('email').notEmpty().withMessage('Email is required'),
  check('password').notEmpty().withMessage('Password is required.'),
  check('email').isEmail().withMessage('Email should be a valid email value.'),
];
