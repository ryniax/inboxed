import bcrypt from 'bcryptjs';
import { User } from '../../../models/User';
import ErrorFactory, { AuthError } from '../../../providers/errorFactory';

export const credentialsValidation = async (password: string, user: User | undefined) => {
  if (!user) {
    const error = ErrorFactory.CreateError(AuthError, 400, 'Invalid credentials');
    throw error;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    const error = ErrorFactory.CreateError(AuthError, 400, 'Invalid credentials');
    throw error;
  }
  return user;
};
