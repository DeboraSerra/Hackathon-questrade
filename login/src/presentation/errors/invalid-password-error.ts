export class InvalidPasswordError extends Error {
  constructor(paramName: string, message: string) {
    super(`Invalid password: ${paramName}`);
    this.name = "InvalidPasswordError";
    this.message = message;
  }
}
