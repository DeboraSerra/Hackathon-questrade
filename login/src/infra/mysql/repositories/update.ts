import { ResultSetHeader } from "mysql2";
import { UpdateRepositorie } from "../../../data/repositories/update";
import { UserRegister, UserUpdate } from "../../../domain/models";
import { connection } from "../configs/connection";
import { LoginRepositorie } from "../../../data/repositories/login";

export class UpdateRepositorieAdapter implements UpdateRepositorie {
  constructor(private loginRepositorie: LoginRepositorie) {}

  async handle({
    email,
    name,
    phone,
    cpf,
    password,
    proofOfIncome,
  }: UserUpdate): Promise<UserRegister> {

    let query = "UPDATE UserDb.users SET";
    const values = []
    if (email) {
      query += ' email = ?'
      values.push(email)
    } if (name) {
      query += ' name = ?'
      values.push(name)
    }if (phone) {
      query += ' phone = ?'
      values.push(phone)
    }if (password) {
      query += ' password = ?'
      values.push(password)
    }if (proofOfIncome) {
      query += ' proofOfIncome = ?'
      values.push(proofOfIncome)
    }
    query += ' WHERE cpf = ?'
    values.push(cpf)

    const users = await connection.execute<ResultSetHeader>(query, values);
    return users as unknown as UserRegister;
  }
}
