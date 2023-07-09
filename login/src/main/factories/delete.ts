import { DeleteAdapter } from "../../data/useCases/delete/delete";
import { DeleteRepositorieAdapter } from "../../infra/mysql/repositories/delete";
import { DeleteController } from "../../presentation/controllers/delete/delete";

export const makeDeleteController = (): DeleteController => {
  const repositorie = new DeleteRepositorieAdapter();
  const deleteService = new DeleteAdapter(repositorie);
  return new DeleteController(deleteService);
}