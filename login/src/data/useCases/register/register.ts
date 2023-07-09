import { UserRegister, UserPayload } from "../../../domain/models";
import { Register } from "../../../domain/useCases/register/register";
import { RegisterRepositorie } from "../../repositories/register";

export class RegisterAdapter implements Register {
  constructor(private repositorie: RegisterRepositorie) {}

  async handle(user: UserRegister): Promise<UserPayload> {
    const { email, cpf } = user;
    
    await this.repositorie.handle(user);

    return {
      email,
      cpf
    }
  }
}