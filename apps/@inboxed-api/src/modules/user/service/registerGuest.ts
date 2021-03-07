import { getRepository } from 'typeorm';
import { User } from '../../../models/User';
import { getUserDTO } from '../user.dto';
import userUtils from '../user.utils';

export const registerGuest = async () => {
  const userRepository = getRepository(User);

  const nickname = userUtils.createGuestNickname();
  const newGuestAccount = await userRepository.create({ nickname }).save();

  return getUserDTO(newGuestAccount);
};
