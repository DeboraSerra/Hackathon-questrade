import { UserRegister, UserPayload } from "../../../domain/models";
import { Register } from "../../../domain/useCases/register/register";
import { JwtSign } from "../../../utils/jwt/jwt-sign";
import { RegisterRepositorie } from "../../repositories/register";

export class RegisterAdapter implements Register {
  constructor(private repositorie: RegisterRepositorie) {}

  async handle(user: UserRegister): Promise<UserPayload> {
    const { email, cpf, phone } = user;
    
    await this.repositorie.handle(user);

    const token = JwtSign({ phone, email, cpf })

    return {
      token
    }
  }
}
