import { ResultSetHeader, RowDataPacket } from "mysql2";
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

    let query = "UPDATE UserDb.users SET ";
    const params = []
    const values = []
    if (email) {
      params.push('email = ?')
      values.push(email)
    } if (name) {
      params.push('name = ?')
      values.push(name)
    }if (phone) {
      params.push('phone = ?')
      values.push(phone)
    }if (password) {
      params.push('password = ?')
      values.push(password)
    }if (proofOfIncome) {
      params.push('proofOfIncome = ?')
      values.push(proofOfIncome)
    }
    query += params.join(', ')
    query += ' WHERE cpf = ?'
    values.push(cpf)
    const user = await connection.execute<ResultSetHeader>(query, values);
    return user as unknown as UserRegister;
  }
}
