import { Router } from "express"
import { expressAdapter } from "../../adapter/express-adapter";
import { makeLoginController } from "../../factories/login";

export default (router: Router): void => {
  router.post("/user/login/", expressAdapter(makeLoginController()));
}
