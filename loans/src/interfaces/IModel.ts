export interface IModel<T> {
  readOne(cpf: string): Promise<T | null>;
  update(id: string, obj: T): Promise<T | null>;
  create(obj: T): Promise<T>;
  delete(id: string): Promise<T | null>
}