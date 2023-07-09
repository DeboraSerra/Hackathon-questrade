import { ResultSetHeader } from "mysql2";
import { DeleteRepositorie } from "../../../data/repositories";
import { connection } from "../configs/connection";

export class DeleteRepositorieAdapter implements DeleteRepositorie {

  async handle(cpf: string): Promise<void> {
    const query = 'DELETE FROM UserDb.users WHERE cpf = ?;';
    await connection.execute<ResultSetHeader>(query, [cpf]);
  }
  
}