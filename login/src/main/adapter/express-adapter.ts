import { Request, Response } from "express";
import { Controller, HttpRequest } from "../../presentation/protocols";

export const expressAdapter = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const { cpf } = req.params;
    const httpRequest: HttpRequest = {
      body: req.body,
    };

    const httpResponse = await controller.handle({
      ...httpRequest,
      cpf,
    });

    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
