import { getRepository } from 'typeorm';
import { User, UserType } from '../../../models/User';
import { getUserDTO } from '../user.dto';
import userUtils from '../user.utils';
import userValidator from '../user.validator';

export const registerUser = async (email: string, nickname: string, password: string) => {
  const userRepository = getRepository(User);

  await userValidator.uniqueUserValidation(email, nickname, userRepository);
  const hashedPassword = await userUtils.hashPassword(password);

  const registeredUser = await userRepository
    .create({ email, nickname, password: hashedPassword, userType: UserType.REGISTERED })
    .save();

  return getUserDTO(registeredUser);
};
