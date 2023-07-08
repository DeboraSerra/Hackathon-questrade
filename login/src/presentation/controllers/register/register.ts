import { Controller, HttpRequest, HttpResponse, InvalidParamError, MissingParamError, Register, ValidateRegisterBody, badRequest, created, serverError } from "./register-protocols";

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
      return created(userPayload);
    } catch (error) {
      return serverError();
    }
  }
}
