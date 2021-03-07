import { getRepository } from 'typeorm';
import { User } from '../../../models/User';
import { getUserDTO } from '../user.dto';
import ErrorFactory, { AuthError } from '../../../providers/errorFactory';

export const getUser = async (userId: number) => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(userId);

  if (!user) {
    const error = ErrorFactory.CreateError(AuthError, 404, 'User not found.');
    throw error;
  }

  return getUserDTO(user);
};
