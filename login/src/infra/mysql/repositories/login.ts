import { ResultSetHeader } from "mysql2";
import { connection } from "../configs/connection";
import { LoginRepositorie } from "../../../data/repositories/login";
import { UserLogin, UserRegister } from "../../../domain/models";

export class LoginRepositorieAdapter implements LoginRepositorie {

  async handle({ email, password }: UserLogin): Promise<UserRegister> {
    const query = 'SELECT * FROM users WHERE (email, password) = (?, ?);';
    const user = await connection.execute<ResultSetHeader>(query, [email,password]);
    return user as unknown as UserRegister;
  }
}
