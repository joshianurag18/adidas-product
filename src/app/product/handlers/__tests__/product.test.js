const { create } = require("../../../../index");
const service = require("../../services/product");
const { getProductResponse } = require("../mocks/product");
jest.mock("../../services/product");
let fastify;
let reply;
describe("Product handlers test", () => {
  beforeAll(async () => {
    fastify = create();
    reply = {
      code: jest.fn()
    };
  });

  afterAll(async () => {
    jest.clearAllMocks();
    await fastify.close();
  });

  describe("GET PRODUCTs Handlers test", () => {
    test("getProduct by ids should return 200, in case of success", async () => {
      service.getProduct.mockResolvedValueOnce({
        statusCode: 200,
        finalResponse: getProductResponse
      });
      const response = await fastify.inject({
        method: "GET",
        url: "/v1/product/FX5898",
        accept: "application/json"
      });
      expect(response.statusCode).toBe(200);
      expect(JSON.parse(response.payload)).toEqual(getProductResponse);
    });
  });
});
