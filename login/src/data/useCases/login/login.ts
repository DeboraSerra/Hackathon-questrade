import { UserLogin, UserPayload } from "../../../domain/models";
import { JwtSign } from "../../../domain/models/user-sign";
import { Login } from "../../../domain/useCases/login/login";
import { LoginRepositorie } from "../../repositories/login";

export class LoginAdapter implements Login {
  constructor(
    private repositorie: LoginRepositorie,
    private jwtSign: JwtSign
  ) {}

  async handle(user: UserLogin): Promise<UserPayload> {
    const { cpf, phone, name, email } = await this.repositorie.handle(user);

    const token = this.jwtSign.handle({ email, cpf, phone, name });

    return {
      token
    }
  }
}
