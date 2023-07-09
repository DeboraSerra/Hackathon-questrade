import { Router } from "express"
import { expressAdapter } from "../../adapter/express-adapter";
import { makeRegisterController } from "../../factories/register";

export default (router: Router): void => {
  router.post("/user/register/", expressAdapter(makeRegisterController()));
}
