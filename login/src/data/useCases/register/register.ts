import { UserRegister, UserPayload } from "../../../domain/models";
import { JwtSign } from "../../../domain/models/user-sign";
import { Register } from "../../../domain/useCases/register/register";
import { RegisterRepositorie } from "../../repositories/register";
import bcrypt from 'bcrypt';

export class RegisterAdapter implements Register {
  constructor(
    private repositorie: RegisterRepositorie,
    private jwtSign: JwtSign
  ) {}

  async handle(user: UserRegister): Promise<UserPayload> {
    const { email, cpf, phone, name } = user;
    const hashPass = await bcrypt.hash(user.password, 15)
    
    await this.repositorie.handle({...user, password: hashPass });

    const token = this.jwtSign.handle({ email, cpf, phone, name });

    return {
      token
    }
  }
}
