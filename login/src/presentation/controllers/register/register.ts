import { Register } from "../../../domain/useCases/register/register";
import { ValidateRegisterBody } from "../../../domain/useCases/register/validate-register-body/validate-register-body";
import { badRequest, ok, serverError } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { InvalidParamError } from '../../errors/invalid-param-error';
import { MissingParamError } from '../../errors/missing-param-error';

export class RegisterController implements Controller {
  constructor(
    private registerService: Register,
    private validateRegisterBodyService: ValidateRegisterBody,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const user = httpRequest.body;

    try {
      const validateResponse = await this.validateRegisterBodyService.handle(user);

      if (validateResponse.error === 'InvalidParam') {
        return badRequest(new InvalidParamError(validateResponse.param, validateResponse.message));
      } else if (validateResponse.error === 'MissingParam') {
        return badRequest(new MissingParamError(validateResponse.param));
      }

      const userPayload = await this.registerService.handle(user);
      return ok(userPayload);
    } catch (error) {
      return serverError();
    }
  }
}
