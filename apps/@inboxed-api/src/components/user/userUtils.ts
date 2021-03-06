import bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import { IError } from '../../interfaces/IError';
import { User } from '../../models/User';

export const createGuestNickname = () => {
  const randomNumber = (Math.random() * 100000).toFixed();
  const nickname = `guest-${randomNumber}`;
  return nickname;
};

export const hashPassword = async (password: string) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

export const matchPassword = async (password: string, hash: string) => {
  const passwordMatch = await bcrypt.compare(password, hash);
  return passwordMatch;
};

export const isUserUnique = async (email: string, nickname: string, userRepository: Repository<User>) => {
  const user = await userRepository.findOne({ where: [{ email }, { nickname }] });

  if (user) {
    let errorMessage = '';

    if (user.nickname === nickname) errorMessage = 'User with that nickname already exists.';
    if (user.email === email) errorMessage = 'User with that email already exists.';

    const error: IError = new Error(errorMessage);
    error.status = 400;
    throw error;
  }
};

export const checkCredentials = async (password: string, user: User | undefined) => {
  if (!user) {
    const error: IError = new Error('Invalid credentials');
    error.status = 400;
    throw error;
  }

  const passwordMatch = await matchPassword(password, user.password);

  if (!passwordMatch) {
    const error: IError = new Error('Invalid credentials');
    error.status = 400;
    throw error;
  }

  return user;
};
