const {app} = require("../src/server");
const request = require("supertest");

describe("GET /", () => {
  it("should return a welcome message", async () => {
	const response = await request(app).get("/");
	expect(response.statusCode).toEqual(200);
	expect(response.body).toHaveProperty("message", "Welcome to the Express Dice API");
  });
});

describe("GET /health", () => {
  it("should return health status", async () => {
	const response = await request(app).get("/health");
	expect(response.statusCode).toEqual(200);
	expect(response.body).toHaveProperty("status", "OK");
	expect(response.body).toHaveProperty("timestamp");
  });
});