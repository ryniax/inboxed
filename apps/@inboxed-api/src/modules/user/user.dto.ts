import { User } from '../../models/User';

export const userDTO = (user: User) => ({
  id: user.id,
  nickname: user.nickname,
  email: user.email,
  userType: user.userType,
  ownedServers: user.ownedServers,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});
