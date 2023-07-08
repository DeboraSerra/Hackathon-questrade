export class NotFoundError extends Error {
  constructor(entity: string) {
    super(`${entity} Not Found`);
    this.name = "NotFoundError";
    this.message = `${entity} not found`;
  }
}