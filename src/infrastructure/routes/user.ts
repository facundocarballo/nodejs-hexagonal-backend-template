import { Controller } from "#app/ports/controller";
import { Router } from "express";

export class UserRouter {
  public router = Router();

  constructor(private getUserController: Controller) {
    this.router.get("/:id", (req, res, next) =>
      this.getUserController.execute(req, res, next)
    );
  }
}
