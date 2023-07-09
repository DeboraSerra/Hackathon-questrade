import { Router } from "express"
import { expressAdapter } from "../../adapter/express-adapter";
import { makeUpdateController } from "../../factories/update";

export default (router: Router): void => {
  router.put("/user/:cpf", expressAdapter(makeUpdateController()));
}
