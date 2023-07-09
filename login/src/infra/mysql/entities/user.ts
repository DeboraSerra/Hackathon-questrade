import { RowDataPacket } from "mysql2"

export interface IUser extends RowDataPacket {
  name: string;
  cpf: string;
  email: string;
  password: string;
  proofOfIncome: string;
  phone: string;
}