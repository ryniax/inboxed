import { Repository } from 'typeorm';
import { ExtendedError } from '../../../interfaces/ExtendedError';
import { User } from '../../../models/User';

export const uniqueUserValidation = async (email: string, nickname: string, userRepository: Repository<User>) => {
  const user = await userRepository.findOne({ where: [{ email }, { nickname }] });

  if (user) {
    let errorMessage = '';

    if (user.nickname === nickname) errorMessage = 'User with that nickname already exists.';
    if (user.email === email) errorMessage = 'User with that email already exists.';

    const error: ExtendedError = new Error(errorMessage);
    error.status = 400;
    throw error;
  }
};
