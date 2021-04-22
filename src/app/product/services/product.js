var axios = require('axios');
const HttpStatus = require("http-status-codes");

exports.getProduct = async (fastify, request) => {
  const { productId } = request.params;
  var isReviewSuccess = new Boolean(true);
  var isProductSuccess = new Boolean(true);
  let responseReview = {};
  let responseProduct = {};

  try {
    responseReview = await axios.get(`http://localhost:3001/v1/reviews/${productId}`);
  }
  catch (e) {
    console.log(e);
    isReviewSuccess = false;
  }

  try {
    responseProduct = await axios.get(`https://www.adidas.co.uk/api/products/${productId}`);
  }
  catch (e) {
    console.log(e);
    isProductSuccess = false;
  }

  if (isReviewSuccess == true && isProductSuccess == true) {
    const finalResponse = { data: { review: responseReview.data.data.review, product: responseProduct.data } };
    return { statusCode: 200, finalResponse };
  }

  if (isReviewSuccess == false && isProductSuccess == true) {
    const finalResponse = { data: { product: responseProduct.data } };
    return { statusCode: 206, finalResponse };
  }

  if (isReviewSuccess == true && isProductSuccess == false) {
    const finalResponse = { data: { review: responseReview.data.data.review } };
    return { statusCode: 206, finalResponse };
  }
  if (isReviewSuccess == false && isProductSuccess == false) {
    const finalResponse = { data: { success: false } };
    return { statusCode: 404, finalResponse };
  }
};


