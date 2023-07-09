import { Router, Express } from "express";
import registerRouter from "../route/register/register";
import loginRouter from "../route/login/login";
import updateRouter from "../route/update/update";
import deleteRouter from "../route/delete/delete";

export default (app: Express): void => {
  const router = Router();
  app.use("/api", router);
  registerRouter(router);
  loginRouter(router);
  updateRouter(router);
  deleteRouter(router);
}