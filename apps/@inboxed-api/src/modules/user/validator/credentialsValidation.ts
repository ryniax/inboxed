import { ExtendedError } from '../../../interfaces/ExtendedError';
import { User } from '../../../models/User';
import userUtils from '../user.utils';

export const credentialsValidation = async (password: string, user: User | undefined) => {
  if (!user) {
    const error: ExtendedError = new Error('Invalid credentials');
    error.status = 400;
    throw error;
  }

  const passwordMatch = await userUtils.matchPassword(password, user.password);

  if (!passwordMatch) {
    const error: ExtendedError = new Error('Invalid credentials');
    error.status = 400;
    throw error;
  }
  return user;
};
