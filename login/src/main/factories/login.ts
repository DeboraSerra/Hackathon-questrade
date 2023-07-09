import { LoginAdapter } from "../../data/useCases/login/login";
import { ValidateLoginBodyAdapter } from "../../data/useCases/login/validate-login-body";
import { LoginRepositorieAdapter } from "../../infra/mysql/repositories/login";
import { LoginController } from "../../presentation/controllers/login/login";
import { JwtSignAdapter } from "../../utils/jwt/jwt-sign";

export const makeLoginController = (): LoginController => {
  const repositorie = new LoginRepositorieAdapter();
  const jwtSign = new JwtSignAdapter();
  const loginService = new LoginAdapter(repositorie, jwtSign);
  const validateLoginBodyService = new ValidateLoginBodyAdapter();
  return new LoginController(loginService, validateLoginBodyService);
}