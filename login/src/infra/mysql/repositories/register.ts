import { OkPacket, ResultSetHeader } from "mysql2";
import { RegisterRepositorie } from "../../../data/repositories/register";
import { UserRegister } from "../../../domain/models";
import { connection } from "../configs/connection";

export class RegisterRepositorieAdapter implements RegisterRepositorie {

  async handle({ name, cpf, email, proofOfIncome, password, phone }: UserRegister): Promise<void> {
    const query = 'INSERT INTO users (cpf, name, email, phone, proofOfIncome, password) VALUES (?, ?, ?, ?, ?, ?);';
    await connection.execute<ResultSetHeader>(query, [cpf, name, email, phone, proofOfIncome, password]);
  }
  
}
