import { UserRegister, UserPayload } from "../../../domain/models";
import { JwtSign } from "../../../domain/models/user-sign";
import { Register } from "../../../domain/useCases/register/register";
import { RegisterRepositorie } from "../../repositories/register";

export class RegisterAdapter implements Register {
  constructor(
    private repositorie: RegisterRepositorie,
    private jwtSign: JwtSign
  ) {}

  async handle(user: UserRegister): Promise<UserPayload> {
    const { email, cpf, phone, name } = user;
    
    await this.repositorie.handle(user);

    const token = this.jwtSign.handle({ email, cpf, phone, name });

    return {
      token
    }
  }
}
