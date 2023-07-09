import { UserLogin, UserPayload } from "../../../domain/models";
import { JwtSign } from "../../../domain/models/user-sign";
import { Login } from "../../../domain/useCases/login/login";
import { InvalidPasswordError } from "../../../presentation/errors";
import { badRequest } from "../../../presentation/helpers/http-helper";
import { HttpResponse } from "../../../presentation/protocols";
import { LoginRepositorie } from "../../repositories/login";
import bcrypt from 'bcrypt'

export class LoginAdapter implements Login {
  constructor(
    private repositorie: LoginRepositorie,
    private jwtSign: JwtSign
  ) {}

  async handle({ cpf, password }: UserLogin): Promise<UserPayload | HttpResponse> {
    const user = await this.repositorie.handle({cpf});
    const match = await bcrypt.compare(password, user.password);
    if (!user || !match) {
      return badRequest(new InvalidPasswordError('password', 'Invalid password'))
    }
    const { password: pass, ...info } = user
    const token = this.jwtSign.handle(info);

    return {
      token
    }
  }
}
