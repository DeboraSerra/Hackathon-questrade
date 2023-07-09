import { UpdateAdapter } from "../../data/useCases/update/update";
import { ValidateUpdateBodyAdapter } from "../../data/useCases/update/validate-update-body";
import { UpdateRepositorieAdapter } from "../../infra/mysql/repositories/update";
import { UpdateController } from "../../presentation/controllers/update/update";
import { JwtSignAdapter } from "../../utils/jwt/jwt-sign";
import { LoginRepositorieAdapter } from '../../infra/mysql/repositories/login';

export const makeUpdateController = (): UpdateController => {
  const loginRepositorie = new LoginRepositorieAdapter();
  const repositorie = new UpdateRepositorieAdapter(loginRepositorie);
  const jwtSign = new JwtSignAdapter();
  const UpdateService = new UpdateAdapter(repositorie, jwtSign);
  const validateUpdateBodyService = new ValidateUpdateBodyAdapter();
  return new UpdateController(UpdateService, validateUpdateBodyService);
}