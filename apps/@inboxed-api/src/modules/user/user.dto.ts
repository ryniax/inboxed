import { UserEntity } from '@inboxed/common';

export const userDTO = (user: UserEntity) => ({
  id: user.id,
  nickname: user.nickname,
  email: user.email,
  userType: user.userType,
  createdAt: user.createdAt,
  updatedAt: user.updatedAt,
});
