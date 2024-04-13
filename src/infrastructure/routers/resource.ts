import { Controller } from "#app/ports/controller";
import { Router } from "express";

export class ResourceRouter {
  public router = Router();

  constructor(private getResourceController: Controller) {
    this.router.get("/", this.getResourceController.execute);
  }
}
