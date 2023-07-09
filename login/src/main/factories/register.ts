import { RegisterAdapter } from "../../data/useCases/register/register";
import { ValidateRegisterBodyAdapter } from "../../data/useCases/register/validate-register-body/validate-register-body";
import { RegisterRepositorieAdapter } from "../../infra/mysql/repositories/register";
import { RegisterController } from "../../presentation/controllers/register/register";
import { JwtSignAdapter } from "../../utils/jwt/jwt-sign";

export const makeRegisterController = (): RegisterController => {
  const repositorie = new RegisterRepositorieAdapter();
  const jwtSign = new JwtSignAdapter();
  const registerService = new RegisterAdapter(repositorie, jwtSign);
  const validateRegisterBodyService = new ValidateRegisterBodyAdapter();
  return new RegisterController(registerService, validateRegisterBodyService);
}