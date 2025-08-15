import { Application } from "express";
import { StatusCodes } from "http-status-codes";
import request from "supertest";
import { bootstrapApp } from "#bootstraps/app";

describe("E2E - GET - '/user'", () => {
  let app: Application;

  beforeAll(() => {
    try {
      app = bootstrapApp();
    } catch (error) {
      console.error("Error creating the server: ", error);
      process.exit(1);
    }
  });

  test("should get a valid user", async () => {
    const response = await request(app).get("/user/1234");
    expect(response.status).toBe(StatusCodes.OK);
  });

  test("shouldn't get a valid user", async () => {
    const response = await request(app).get("/user/123");
    expect(response.status).toBe(StatusCodes.NOT_FOUND);
  });
});
