const {
  getProduct
} = require("../product");

const nock = require("nock");

const { responseProduct, responseReview } = require("../mocks/product");

const request = {};
const fastify = {};

describe("PRODUCT Service", () => {
  beforeAll(() => {
    nock.disableNetConnect();
  });

  afterAll(() => {
    nock.enableNetConnect();
  });

  test("getProduct by id should give transformed response", async () => {
    request.params = { productId: "123" };

    nock("https://www.adidas.co.uk/api")
        .get("/products/123")
        .reply(200, responseProduct);

    nock("http://localhost:3001")
        .get("/v1/reviews/123")
        .reply(200, responseReview);
   
    const response = await getProduct(fastify, request);
    expect(response.statusCode).toEqual(200)
    nock.cleanAll();
    //expect(response).toEqual({ data: { review: reviewResponse[0] } });
  })
});
