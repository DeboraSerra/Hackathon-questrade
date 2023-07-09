import { Login } from "../../../domain/useCases/login/login";
import { ValidateLoginBody } from "../../../domain/useCases/login/validate-login-body";
import { InvalidParamError, MissingParamError } from "../../errors";
import { badRequest, ok, serverError } from "../../helpers/http-helper";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";

export class LoginController implements Controller {
  constructor(
    private loginService: Login,
    private validateLoginBodyService: ValidateLoginBody,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const user = httpRequest.body;

    try {
      const validateResponse = await this.validateLoginBodyService.handle(user);
      
      if (validateResponse.error && validateResponse.error === 'InvalidParam') {
        return badRequest(new InvalidParamError(validateResponse.param, validateResponse.message));
      } else if (validateResponse.error && validateResponse.error === 'MissingParam') {
        return badRequest(new MissingParamError(validateResponse.param));
      }
      
      const userPayload = await this.loginService.handle(user);
      return ok(userPayload);
    } catch (error) {
      console.error(error)
      return serverError();
    }
  }
}