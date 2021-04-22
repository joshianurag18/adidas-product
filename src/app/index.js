const productRoutes = require("./product/routes");
const { errorHandler } = require("./errorHandler");

module.exports = async fastify => {
  console.log("*******First ********");
  fastify.setErrorHandler(errorHandler());
  fastify.register(productRoutes, { prefix: "/v1" });
};
