const {
  errorSchemas
} = require("../../commons/schema");

const commonResponseSchema = {
  data: {
    type: "object",
    required: ["product"],
    properties: {
      reviwes: {
        type: "object",
        properties: {
          productId: { type: "string" },
          averageProductScore: { type: "number" },
          numberOfReviwes: { type: "number" }
        }
      }
    }
  }
};
exports.getProductSchema = {
  tags: ["Get Product"],
  summary: "This API returns Product based on passed product",
  description: "Get reviwes based on product id",
  response: {
    200: {
      type: "object",
      properties: {
        data: {
          type: "object",
          properties: {
            Product: commonResponseSchema
          }
        }
      }
    },
    ...errorSchemas
  }
};


