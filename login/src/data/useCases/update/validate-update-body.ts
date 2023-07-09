import { UserUpdate, ValidateResponse } from "../../../domain/models";
import { ValidateUpdateBody } from "../../../domain/useCases/update/validate-update-body";
import { validateCpf } from "../../../utils/validate-cpf";
import { UpdateSchema } from "../../../utils/zod/zod-schemas";

export class ValidateUpdateBodyAdapter implements ValidateUpdateBody {
  async handle(user: UserUpdate): Promise<ValidateResponse> {
    const result = UpdateSchema.safeParse(user);

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
