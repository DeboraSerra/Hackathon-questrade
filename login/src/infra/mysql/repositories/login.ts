import { ResultSetHeader, RowDataPacket } from "mysql2";
import { connection } from "../configs/connection";
import { LoginRepositorie } from "../../../data/repositories/login";
import { UserLogin, UserRegister } from "../../../domain/models";

export class LoginRepositorieAdapter implements LoginRepositorie {

  async handle({ cpf }: UserLogin): Promise<UserRegister> {
    const query = 'SELECT * FROM UserDb.users WHERE cpf = ?';
    const [[user]] = await connection.execute<RowDataPacket[]>(query, [cpf]);
    return user as unknown as UserRegister;
  }
}
