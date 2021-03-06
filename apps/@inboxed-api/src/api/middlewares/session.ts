import session from 'express-session';
import { accessEnv } from '../../utils/accessEnv';

const expressSession = session({
  secret: accessEnv('DEV_SECRET_SESSION', 'secret-key'),
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
  },
});

declare module 'express-session' {
  interface SessionData {
    userId: number;
    isAuth: boolean;
  }
}

export default expressSession;
