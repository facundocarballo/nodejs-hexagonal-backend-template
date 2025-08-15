import { Application } from "express";
import request from "supertest";
import { CreateUserUseCaseInput } from "#app/use-cases/create-user/create-user-input";
import { CreateUserUserCaseInputMother } from "test/app/use-cases/create-user/create-user-input";
import { StatusCodes } from "http-status-codes";
import { bootstrapApp } from "#bootstraps/app";

describe("E2E - CREATE - '/user'", () => {
  let app: Application;

  beforeAll(() => {
    try {
      app = bootstrapApp();
    } catch (error) {
      console.error("Error creating the server: ", error);
      process.exit(1);
    }
  });

  test("should create a valid user", async () => {
    const input = new CreateUserUseCaseInput("facu", "123456789");
    const response = await request(app).post("/user").send(input);
    expect(response.status).toBe(StatusCodes.CREATED);
  });

  test("shouldn't create a valid user", async () => {
    const response = await request(app)
      .post("/user")
      .send(CreateUserUserCaseInputMother.any());
    expect(response.status).toBe(StatusCodes.UNAUTHORIZED);
  });
});
