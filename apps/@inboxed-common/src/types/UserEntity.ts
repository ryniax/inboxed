import { UserType } from "../enums/UserType";

export type UserEntity = {
  id: number;
  nickname?: string;
  email?: string;
  password?: string;
  userType: UserType;
  createdAt: Date;
  updatedAt: Date;
};
