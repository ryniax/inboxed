import bcrypt from 'bcryptjs';

export const matchPassword = async (password: string, hash: string) => {
  const passwordMatch = await bcrypt.compare(password, hash);
  return passwordMatch;
};
