import { UserPayload, UserUpdate } from "../../../domain/models";
import { JwtSign } from "../../../domain/models/user-sign";
import { Update } from "../../../domain/useCases/update/update";
import { UpdateRepositorie } from "../../repositories/update";

export class UpdateAdapter implements Update {
  constructor(
    private repositorie: UpdateRepositorie,
    private jwtSign: JwtSign
  ) {}

  async handle(user: UserUpdate): Promise<UserPayload> {
    const { email, cpf, phone, name } = await this.repositorie.handle(user);

    const token = this.jwtSign.handle({ email, cpf, phone, name });

    return {
      token
    }
  }
}
