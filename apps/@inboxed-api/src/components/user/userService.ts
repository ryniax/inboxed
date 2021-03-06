import { getRepository } from 'typeorm';
import { IError } from '../../interfaces/IError';
import { User, UserType } from '../../models/User';
import { checkCredentials, createGuestNickname, hashPassword, isUserUnique } from './userUtils';

export type UserDTO = ReturnType<typeof userDTO>;

export const userDTO = (user: User) => ({
  id: user.id,
  nickname: user.nickname,
  email: user.email,
  userType: user.userType,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});

const createGuest = async () => {
  const userRepository = getRepository(User);

  const nickname = createGuestNickname();
  const newGuestAccount = await userRepository.create({ nickname }).save();

  return userDTO(newGuestAccount);
};

const registerUser = async (email: string, nickname: string, password: string) => {
  const userRepository = getRepository(User);

  await isUserUnique(email, nickname, userRepository);
  const hashedPassword = await hashPassword(password);

  const registeredUser = await userRepository
    .create({ email, nickname, password: hashedPassword, userType: UserType.REGISTERED })
    .save();

  return userDTO(registeredUser);
};

const loginUser = async (email: string, password: string) => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ where: { email } });

  const validatedUser = await checkCredentials(password, user);

  return userDTO(validatedUser);
};

const getUser = async (userId: number) => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(userId);

  if (!user) {
    const error: IError = new Error('User not found.');
    error.status = 404;
    throw error;
  }

  return userDTO(user);
};

const registerUserFromGuest = async (email: string, nickname: string, password: string, userId: number) => {
  const userRepository = getRepository(User);
  await isUserUnique(email, nickname, userRepository);

  const hashedPassword = await hashPassword(password);

  await userRepository.update(userId, {
    email,
    nickname,
    password: hashedPassword,
    userType: UserType.REGISTERED,
  });
  const updatedUser = await getUser(userId);

  return updatedUser;
};

export default {
  createGuest,
  registerUser,
  loginUser,
  getUser,
  registerUserFromGuest,
};
