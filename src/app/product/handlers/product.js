const HttpStatus = require("http-status-codes");
const {
  getProduct
} = require("../services/product");


exports.getProduct = async function getProductHandler(request, reply) {
  const response = await getProduct(this, request);
  return reply.code(response.statusCode).send(response.finalResponse);
};


