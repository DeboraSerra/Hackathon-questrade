import { Update } from "../../../domain/useCases/update/update";
import { ValidateUpdateBody } from "../../../domain/useCases/update/validate-update-body";
import { InvalidParamError, MissingParamError } from "../../errors";
import { Controller, HttpRequest, HttpResponse } from "../../protocols";
import { badRequest, ok, serverError } from "../register/register-protocols";

export class UpdateController implements Controller {
  constructor(
    private updateService: Update,
    private validateUpdateBodyService: ValidateUpdateBody,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const user = httpRequest.body;
    const cpf = httpRequest.params;

    try {
      const validateResponse = await this.validateUpdateBodyService.handle({ cpf, ...user });

      if (validateResponse.error === 'InvalidParam') {
        return badRequest(new InvalidParamError(validateResponse.param, validateResponse.message));
      } else if (validateResponse.error === 'MissingParam') {
        return badRequest(new MissingParamError(validateResponse.param));
      }

      const userPayload = await this.updateService.handle(user);
      return ok(userPayload);
    } catch (error) {
      return serverError();
    }
  }

}