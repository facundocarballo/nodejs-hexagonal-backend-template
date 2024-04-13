import { GetResourceController } from "#infrastructure/controllers/get-resource";
import { ResourceRouter } from "#infrastructure/routers/resource";
import { Router } from "express";

export function getRouter(): Router {
  const getResourceController = new GetResourceController();
  const resourceRouter = new ResourceRouter(getResourceController);
  return resourceRouter.router;
}
