export class InputError extends Error {
  constructor(message: string, public readonly status?: number) {
    super(message);
    this.name = 'InputError';
    Object.setPrototypeOf(this, InputError.prototype);
  }
}
