import express, { Application } from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import { getRouter } from "#router";

export function bootstrap(): Application {
  const app: Application = express();

  app.disable("x-powered-by");

  // Middlewares
  app.use(cors());
  app.use(bodyParser.json({ limit: "15mb" }));
  app.use(bodyParser.urlencoded({ extended: true }));

  // Routers
  app.use("/user", getRouter());

  return app;
}
