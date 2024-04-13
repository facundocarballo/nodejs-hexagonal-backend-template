import { UserNotFound } from "#app/exceptions/user-not-found";
import { Controller } from "#app/ports/controller";
import { GetUserRequest } from "#app/schemas/get-user";
import { GetUserUseCase } from "#app/use-cases/get-user/get-user";
import { GetUserUseCaseInput } from "#app/use-cases/get-user/get-user-input";
import { Request, Response, NextFunction } from "express";

export class GetUserController implements Controller {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async execute(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { id } = GetUserRequest.parse(req.params);
      const input = new GetUserUseCaseInput(id);
      const user = await this.getUserUseCase.execute(input);
      res.status(200).send(user);
    } catch (error) {
      if (error instanceof UserNotFound) {
        res.status(404).send({ message: error.message });
        return;
      }
      res.status(300).send({ message: "Unexpected error." });
    }
  }
}
