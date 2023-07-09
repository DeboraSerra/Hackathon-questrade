import { ResultSetHeader } from "mysql2";
import { connection } from "../configs/connection";
import { LoginRepositorie } from "../../../data/repositories/login";
import { UserLogin, UserRegister } from "../../../domain/models";

export class LoginRepositorieAdapter implements LoginRepositorie {

  async handle({ cpf, password }: UserLogin): Promise<UserRegister> {
    const query = 'SELECT * FROM users WHERE (cpf, password) = (?, ?);';
    const user = await connection.execute<ResultSetHeader>(query, [cpf,password]);
    return user as unknown as UserRegister;
  }
}
