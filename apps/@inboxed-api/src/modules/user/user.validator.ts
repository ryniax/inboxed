import { check } from 'express-validator';

const MINIMUM_NICKNAME_LENGTH = 3;
const MINIMUM_PASSWORD_LENGTH = 8;

const registerUserValidation = [
  check('email').notEmpty().withMessage('Email is required'),
  check('nickname').notEmpty().withMessage('Nickname is required'),
  check('password').notEmpty().withMessage('Password is required.'),
  check('email').isEmail().withMessage('Email should be a valid email value.'),
  check('nickname')
    .isLength({ min: MINIMUM_NICKNAME_LENGTH })
    .withMessage(`Nickname should be at least ${MINIMUM_NICKNAME_LENGTH} character long.`),
  check('password')
    .isLength({ min: MINIMUM_PASSWORD_LENGTH })
    .withMessage(`Nickname should be at least ${MINIMUM_PASSWORD_LENGTH} character long.`),
];

const loginUserValidation = [
  check('email').notEmpty().withMessage('Email is required'),
  check('password').notEmpty().withMessage('Password is required.'),
  check('email').isEmail().withMessage('Email should be a valid email value.'),
];

export default {
  registerUserValidation,
  loginUserValidation,
};
