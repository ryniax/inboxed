import httpLogger from './morgan';
import session from './session';
import isAuth from './isAuth';
import httpErrorHandler from './errors/httpErrorHandler';
import notFoundErrorHandler from './errors/notFoundErrorHandler';
import helmet from './helmet';

export const middlewares = {
  httpLogger,
  session,
  isAuth,
  httpErrorHandler,
  notFoundErrorHandler,
  helmet,
};
