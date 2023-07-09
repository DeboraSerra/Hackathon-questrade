import express from "express";
import setupMiddlewares from "./middlewares";
import setupRouter from "./router";

const app = express();
setupMiddlewares(app);
setupRouter(app);

export default app;
