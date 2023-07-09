import { Delete } from "../../../domain/useCases/delete/delete";
import { validateCpf } from "../../../utils/validate-cpf";
import { Controller, HttpRequest, HttpResponse, InvalidParamError, MissingParamError, badRequest, noContent, serverError } from "../register/register-protocols";

export class DeleteController implements Controller {
  constructor(
    private deleteService: Delete,
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const cpf = httpRequest.params;

    if (!cpf) {
      return badRequest(new MissingParamError("cpf"));
    } else if (validateCpf(cpf) === false) {
      return badRequest(new InvalidParamError("cpf", '"cpf" is invalid'));
    }

    try {
      await this.deleteService.handle(cpf);

      return noContent();
    } catch (error) {
      return serverError();
    }
  }

}