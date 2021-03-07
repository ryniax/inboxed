import { Repository } from 'typeorm';
import { User } from '../../../models/User';
import ErrorFactory, { AuthError } from '../../../providers/errorFactory';

export const uniqueUserValidation = async (email: string, nickname: string, userRepository: Repository<User>) => {
  const user = await userRepository.findOne({ where: [{ email }, { nickname }] });

  if (user) {
    let errorMessage = '';

    if (user.nickname === nickname) errorMessage = 'User with that nickname already exists.';
    if (user.email === email) errorMessage = 'User with that email already exists.';

    const error = ErrorFactory.CreateError(AuthError, 400, errorMessage);
    throw error;
  }
};
