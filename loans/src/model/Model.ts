import { Model as MongoModel, UpdateQuery } from "mongoose";
import { IModel } from "../interfaces/IModel";

export default class Model<T> implements IModel<T> {
  protected _model: MongoModel<T>;
  constructor(model: MongoModel<T>) {
    this._model = model;
  }

  public async readOne(cpf: string): Promise<T | null> {
    const loan = await this._model.findOne({ _id: cpf });
    return loan;
  }

  public async update(cpf: string, obj: T): Promise<T | null> {
    const result = await this._model.findByIdAndUpdate(
      {
        _id: cpf,
      },
      { ...obj } as UpdateQuery<T>,
      { new: true }
    );
    return result as T;
  }

  public async delete(cpf: string): Promise<T | null> {
      const result = await this._model.deleteOne({ _id: cpf })
      return result as unknown as T
  }

  public async create(obj: T): Promise<T> {
      return this._model.create(obj)
  }
}
