const request = require("supertest");
const app = require("../../app");

describe("Auth Routes", () => {
  test("should fail validation", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({});

    expect(res.status).toBe(400);
  });
});
