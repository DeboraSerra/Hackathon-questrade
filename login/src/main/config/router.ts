import { Router, Express } from "express";
import registerRouter from "../route/register/register";

export default (app: Express): void => {
  const router = Router();
  app.use("/api", router);
  registerRouter(router);
}