import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import { User, UserType } from '../../models/User';
import { getUserDTO } from './user.dto';
import ErrorFactory, { AuthError } from '../../providers/errorFactory';
import userUtils from './user.utils';
import userValidator from './user.validator';

const getUser = async (userId: number) => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(userId);

  if (!user) {
    const error = ErrorFactory.CreateError(AuthError, 404, 'User not found.');
    throw error;
  }

  return getUserDTO(user);
};

const registerGuest = async () => {
  const userRepository = getRepository(User);

  const nickname = userUtils.createGuestNickname();
  const newGuestAccount = await userRepository.create({ nickname }).save();

  return getUserDTO(newGuestAccount);
};

const registerUser = async (email: string, nickname: string, password: string) => {
  const userRepository = getRepository(User);

  await userValidator.uniqueUserValidation(email, nickname, userRepository);
  const hashedPassword = await bcrypt.hash(password, 10);

  const registeredUser = await userRepository
    .create({ email, nickname, password: hashedPassword, userType: UserType.REGISTERED })
    .save();

  return getUserDTO(registeredUser);
};

const registerUserFromGuest = async (email: string, nickname: string, password: string, userId: number) => {
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

const loginUser = async (email: string, password: string) => {
  const userRepository = getRepository(User);

  const user = await userRepository.findOne({ where: { email } });
  const validatedUser = await userValidator.credentialsValidation(password, user);

  return getUserDTO(validatedUser);
};

export default {
  registerGuest,
  registerUser,
  loginUser,
  getUser,
  registerUserFromGuest,
};
