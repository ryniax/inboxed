import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import { User, UserType } from '../../../models/User';
import { getUser } from './getUser';
import userValidator from '../user.validator';

export const registerUserFromGuest = async (email: string, nickname: string, password: string, userId: number) => {
  const userRepository = getRepository(User);
  await userValidator.uniqueUserValidation(email, nickname, userRepository);

  const hashedPassword = await bcrypt.hash(password, 10);

  await userRepository.update(userId, {
    email,
    nickname,
    password: hashedPassword,
    userType: UserType.REGISTERED,
  });
  const updatedUser = await getUser(userId);

  return updatedUser;
};
