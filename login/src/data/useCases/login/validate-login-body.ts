import { UserLogin, ValidateResponse } from "../../../domain/models";
import { ValidateLoginBody } from "../../../domain/useCases/login/validate-login-body/validate-login-body";
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

    return {
      error: "",
      param: "",
      message: ""
    }
  }
}
