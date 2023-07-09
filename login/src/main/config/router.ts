import { Router, Express } from "express";
import registerRouter from "../route/register/register";
import loginRouter from "../route/login/login";

export default (app: Express): void => {
  const router = Router();
  app.use("/api", router);
  registerRouter(router);
  loginRouter(router);
}