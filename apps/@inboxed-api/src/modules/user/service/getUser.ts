import { getRepository } from 'typeorm';
import { ExtendedError } from '../../../interfaces/ExtendedError';
import { User } from '../../../models/User';
import { getUserDTO } from '../user.dto';

export const getUser = async (userId: number) => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(userId);

  if (!user) {
    const error: ExtendedError = new Error('User not found.');
    error.status = 404;
    throw error;
  }

  return getUserDTO(user);
};
