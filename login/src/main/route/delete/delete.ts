import { Router } from "express"
import { expressAdapter } from "../../adapter/express-adapter";
import { makeDeleteController } from "../../factories/delete";

export default (router: Router): void => {
  router.delete("/user/:cpf", expressAdapter(makeDeleteController()));
}
