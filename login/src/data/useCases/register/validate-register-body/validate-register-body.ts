import { UserRegister, ValidateResponse } from "../../../../domain/models";
import { ValidateRegisterBody } from "../../../../presentation/controllers/register/register-protocols";
import { validateCpf } from "../../../../utils/validate-cpf";
import { RegisterSchema } from "../../../../utils/zod/zod-schemas";

export class ValidateRegisterBodyAdapter implements ValidateRegisterBody {
  async handle(user: UserRegister): Promise<ValidateResponse> {
    const result = RegisterSchema.safeParse(user);

    if (result.success === false) {
      const { code, message, path } = result.error.issues[0];

      if (code === "invalid_type") {
        return {
          error: 'InvalidParam',
          message,
          param: path[0] as string
        }
      }
    }

    const isCpfValid = validateCpf(user.cpf);
    if (isCpfValid === false) return {
      error: 'InvalidParam',
      param: 'cpf',
      message: "CPF have invalid format!"
    }

    return {
      error: "",
      param: "",
      message: ""
    }
  }
}
