import { UserLogin, ValidateResponse } from "../../../domain/models";
import { ValidateLoginBody } from "../../../domain/useCases/login/validate-login-body";
import { validateCpf } from "../../../utils/validate-cpf";
import { LoginSchema } from "../../../utils/zod/zod-schemas";

export class ValidateLoginBodyAdapter implements ValidateLoginBody {
  async handle(user: UserLogin): Promise<ValidateResponse> {
    const result = LoginSchema.safeParse(user);

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
