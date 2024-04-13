import { GetUserUseCase } from "#app/use-cases/get-user/get-user";
import { GetUserController } from "#infrastructure/controllers/get-resource";
import { UserLocalRepository } from "#infrastructure/repositories/user-local-repository";
import { UserRouter } from "#infrastructure/routes/user";
import { Router } from "express";

export function getRouter(): Router {
  // Repositories
  const userLocalRepository = new UserLocalRepository();

  // Use Cases
  const getUserUseCase = new GetUserUseCase(userLocalRepository);

  // Controllers
  const getUserController = new GetUserController(getUserUseCase);

  return new UserRouter(getUserController).router;
}