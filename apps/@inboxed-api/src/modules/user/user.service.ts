import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import { User, UserType } from '../../models/User';
import { userDTO } from './user.dto';
import { HTTPError } from '../../utils/errors/httpError';
import { InputError } from '../../utils/errors/inputError';
import { mapUserParamsToQuery } from './user.helpers';
import { FindUserParams } from '../../types/FindUserParams';

const findUser = async (findUserParams: FindUserParams): Promise<User | undefined> => {
  const isParamObjectEmpty = !Object.keys(findUserParams).length;

  if (isParamObjectEmpty) throw new InputError('No params.');

  const userRepository = getRepository(User);
  const queryParams = mapUserParamsToQuery(findUserParams);
  const user = await userRepository.findOne({ where: queryParams });

  return user;
};

const getSessionUser = async (userId: number) => {
  const user = await findUser({ userId });
  if (!user) throw new HTTPError('Record not found', 400);

  return userDTO(user);
};

const registerGuest = async () => {
  const userRepository = getRepository(User);
  const guest = await userRepository.create().save();

  return userDTO(guest);
};

const registerUser = async (email: string, nickname: string, password: string) => {
  const userExists = await findUser({ email, nickname });
  if (userExists) {
    throw new HTTPError('User with that email or nickname already exists', 400);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userRepository = getRepository(User);
  const user = await userRepository
    .create({ email, nickname, password: hashedPassword, userType: UserType.REGISTERED })
    .save();

  return userDTO(user);
};

const registerUserFromGuest = async (email: string, nickname: string, password: string, userId: number) => {
  const userExists = await findUser({ email, nickname });
  if (userExists) {
    throw new HTTPError('User with that email or nickname already exists', 400);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const userRepository = getRepository(User);
  await userRepository.update(userId, {
    email,
    nickname,
    password: hashedPassword,
    userType: UserType.REGISTERED,
  });

  const user = await getSessionUser(userId);
  return user;
};

const loginUser = async (email: string, password: string) => {
  const user = await findUser({ email });
  if (!user) throw new HTTPError('Invalid credentials', 400);

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) throw new HTTPError('Invalid credentials', 400);

  return userDTO(user);
};

export default {
  registerGuest,
  registerUser,
  loginUser,
  registerUserFromGuest,
  getSessionUser,
};
