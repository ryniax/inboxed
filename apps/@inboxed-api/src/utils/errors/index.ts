import { HTTPError } from './httpError';
import { InputError } from './inputError';

export type ApplicationError = HTTPError | InputError;
