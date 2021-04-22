const { create } = require("../../../../src/index");

describe("GET PRODUCT Integration Test", () => {
  let fastify;

  beforeAll(async () => {
    fastify = await create();
    // await fastify.ready();
  });

  /* afterAll(() => {
    fastify.knex.destroy();
  }); */

  describe("Get product by product id", () => {
    it("should return review and  product for product id - success case", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/v1/product/FX5898",
        accept: "application/json"
      });

      expect(response.statusCode).toBe(200);
      //  expect(JSON.parse(response.payload)).toEqual(getReviewResponse);
    });

    it("should return only product for product - partial success case", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/v1/product/400",
        accept: "application/json"
      });

      expect(response.statusCode).toBe(206);
      //  expect(JSON.parse(response.payload)).toEqual(getReviewResponse);
    });

    it("should return error for product id which  does not exist- error case", async () => {
      const response = await fastify.inject({
        method: "GET",
        url: "/v1/product/9500",
        accept: "application/json"
      });

      expect(response.statusCode).toBe(404);

    });
  });
});
