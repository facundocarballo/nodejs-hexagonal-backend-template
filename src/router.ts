import { CreateUserUseCase } from "#app/use-cases/create-user/create-user";
import { GetUserUseCase } from "#app/use-cases/get-user/get-user";
import { CreateUserController } from "#infrastructure/controllers/create-user";
import { GetUserController } from "#infrastructure/controllers/get-user";
import { UserLocalRepository } from "#infrastructure/repositories/user-local-repository";
import { UserRouter } from "#infrastructure/routes/user";
import { Router } from "express";

export function getRouter(): Router {
  // Repositories
  const userLocalRepository = new UserLocalRepository();

  // Use Cases
  const getUserUseCase = new GetUserUseCase(userLocalRepository);
  const createUserUseCase = new CreateUserUseCase(userLocalRepository);

  // Controllers
  const getUserController = new GetUserController(getUserUseCase);
  const createUserController = new CreateUserController(createUserUseCase);

  return new UserRouter(getUserController, createUserController).router;
}
