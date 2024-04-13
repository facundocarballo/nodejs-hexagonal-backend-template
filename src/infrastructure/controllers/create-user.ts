import { UserCantCreate } from "#app/exceptions/user-cant-create";
import { Controller } from "#app/ports/controller";
import { CreateUserRequest } from "#app/schemas/create-user";
import { CreateUserUseCase } from "#app/use-cases/create-user/create-user";
import { CreateUserUseCaseInput } from "#app/use-cases/create-user/create-user-input";
import { Request, Response, NextFunction } from "express";

export class CreateUserController implements Controller {
  constructor(private createUserUseCase: CreateUserUseCase) {}
  async execute(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { username, password } = CreateUserRequest.parse(req.body);
      const input = new CreateUserUseCaseInput(username, password);
      const user = await this.createUserUseCase.execute(input);
      res.status(201).send(user);
    } catch (error) {
      if (error instanceof UserCantCreate) {
        res.status(300).send({ message: "User cannot be created." });
        return;
      }
      res.status(300).send({ message: "Unexpected error." });
    }
  }
}
