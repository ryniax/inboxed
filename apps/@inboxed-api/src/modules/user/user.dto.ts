import { User } from '../../models/User';

export type GetUserDTO = ReturnType<typeof getUserDTO>;

export const getUserDTO = (user: User) => ({
  id: user.id,
  nickname: user.nickname,
  email: user.email,
  userType: user.userType,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});
