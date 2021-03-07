import { check } from 'express-validator';
import { Repository } from 'typeorm';
import bcrypt from 'bcryptjs';
import ErrorFactory, { AuthError } from '../../providers/errorFactory';
import { User } from '../../models/User';

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

const uniqueUserValidation = async (email: string, nickname: string, userRepository: Repository<User>) => {
  const user = await userRepository.findOne({ where: [{ email }, { nickname }] });

  if (user) {
    let errorMessage = '';

    if (user.nickname === nickname) errorMessage = 'User with that nickname already exists.';
    if (user.email === email) errorMessage = 'User with that email already exists.';

    const error = ErrorFactory.CreateError(AuthError, 400, errorMessage);
    throw error;
  }
};

const credentialsValidation = async (password: string, user: User | undefined) => {
  if (!user) {
    const error = ErrorFactory.CreateError(AuthError, 400, 'Invalid credentials');
    throw error;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    const error = ErrorFactory.CreateError(AuthError, 400, 'Invalid credentials');
    throw error;
  }
  return user;
};

export default {
  registerUserValidation,
  loginUserValidation,
  uniqueUserValidation,
  credentialsValidation,
};
