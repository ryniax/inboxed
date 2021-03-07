import { getRepository } from 'typeorm';
import { User } from '../../../models/User';
import { getUserDTO } from '../user.dto';
import userValidator from '../user.validator';

export const loginUser = async (email: string, password: string) => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ where: { email } });

  const validatedUser = await userValidator.credentialsValidation(password, user);

  return getUserDTO(validatedUser);
};
