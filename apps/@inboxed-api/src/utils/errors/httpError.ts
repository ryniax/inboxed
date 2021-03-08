export class HTTPError extends Error {
  constructor(message: string, public readonly status?: number) {
    super(message);
    this.name = 'HTTPError';
    Object.setPrototypeOf(this, HTTPError.prototype);
  }
}
