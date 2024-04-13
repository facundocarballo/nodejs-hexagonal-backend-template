import { bootstrap } from "#bootstrap";
import { Application } from "express";
import request from "supertest";
import http from "http";

describe("E2E - GET - '/user'", () => {
  let app: Application;
  let server: http.Server;

  beforeAll(() => {
    try {
      app = bootstrap();
      server = app.listen(8080);
    } catch (error) {
      console.error("Error creating the server: ", error);
      process.exit(1);
    }
  });

  afterAll(() => {
    try {
      server.close();
    } catch (error) {
      console.error("Error closing the server: ", error);
    }
  });

  test("should get a valid user", async () => {
    const response = await request(app).get("/user/1234");
    expect(response.status).toBe(200);
  });

  test("shouldn't get a valid user", async () => {
    const response = await request(app).get("/user/123");
    expect(response.status).toBe(404);
  });
});
