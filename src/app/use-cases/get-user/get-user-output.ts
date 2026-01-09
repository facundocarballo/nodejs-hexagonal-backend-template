import { UserNotFound } from "#app/exceptions/user-not-found";
import { User } from "#domain/user";

export type GetUserUseCaseOutput = User | UserNotFound;