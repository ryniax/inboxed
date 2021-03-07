import { registerGuest } from './controller/registerGuest';
import { registerUser } from './controller/registerUser';
import { loginUser } from './controller/loginUser';
import { getUserFromSession } from './controller/getUserFromSession';
import { registerUserFromGuest } from './controller/registerUserFromGuest';

export default {
  registerGuest,
  registerUser,
  loginUser,
  getUserFromSession,
  registerUserFromGuest,
};
