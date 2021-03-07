import { ExtendedError } from '../interfaces/ExtendedError';

export class AuthError extends Error {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ConstructorType<T> = new (...args: any[]) => T;

const CreateError = <E extends Error>(ErrorClass: ConstructorType<E>, status: number, message: string) => {
  const error: ExtendedError = new ErrorClass(message);
  error.status = status;
  return error;
};

export default {
  CreateError,
};
