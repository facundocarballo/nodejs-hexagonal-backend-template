import { Controller } from "#app/ports/controller";
import { Request, Response, NextFunction } from "express";

export class GetResourceController implements Controller {
  async execute(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    res.status(200).send({ message: "Hello World!" });
  }
}
