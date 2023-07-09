import { ResultSetHeader } from "mysql2";
import { UpdateRepositorie } from "../../../data/repositories/update";
import { UserRegister, UserUpdate } from "../../../domain/models";
import { connection } from "../configs/connection";
import { LoginRepositorie } from "../../../data/repositories/login";

export class UpdateRepositorieAdapter implements UpdateRepositorie {
  constructor(private loginRepositorie: LoginRepositorie) {}

  async handle(user: UserUpdate): Promise<UserRegister> {
    const oldUser = { };

    const query = 'SELECT * FROM users WHERE (email, password) = (?, ?);';
    const usera = await connection.execute<ResultSetHeader>(query, [email,password]);
    return user as unknown as UserRegister;
  }
}
