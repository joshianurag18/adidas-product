// const { extractTenantId } = require("../hooks");
const {
  getReviewSchema
} = require("./schemas/product");

const {
  getProduct
} = require("./handlers/product");

module.exports = async fastify => {
  
  fastify.route({
    method: "GET",
    url: "/product/:productId",
    schema: getReviewSchema,
    handler: getProduct
  });
  
};
