import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import { User, UserType } from '../../../models/User';
import { getUserDTO } from '../user.dto';
import userValidator from '../user.validator';

export const registerUser = async (email: string, nickname: string, password: string) => {
  const userRepository = getRepository(User);

  await userValidator.uniqueUserValidation(email, nickname, userRepository);
  const hashedPassword = await bcrypt.hash(password, 10);

  const registeredUser = await userRepository
    .create({ email, nickname, password: hashedPassword, userType: UserType.REGISTERED })
    .save();

  return getUserDTO(registeredUser);
};
