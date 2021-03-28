import session from './session';
import isAuth from './isAuth';
import httpErrorHandler from './errors/httpErrorHandler';
import notFoundErrorHandler from './errors/notFoundErrorHandler';

export const middlewares = {
  session,
  isAuth,
  httpErrorHandler,
  notFoundErrorHandler,
};
