/* eslint-disable complexity */
const util = require("util");

exports.formatDetail = detail => {
  if (typeof detail === "string" || detail instanceof String) {
    return detail;
  }
  return util.inspect(detail);
};

exports.getPropertyPath = val => {
  let path = "";
  if (val.dataPath && val.params.missingProperty) {
    path = `${val.dataPath}/${val.params.missingProperty}`;
  } else if (val.dataPath && val.params.additionalProperty) {
    path = `${val.dataPath}/${val.params.additionalProperty}`;
  } else {
    path =
      val.params.missingProperty ||
      val.dataPath ||
      val.params.propertyName ||
      val.propertyName ||
      "empty_property_key";
  }
  return path.replace(".", "").replace("/", "");
};

exports.getRequest = request => {
  return {
    url: request.raw.url || "NO_URL_FOUND",
    headers: request.headers || "NO_HEADERS_FOUND",
    body: request.body || "NO_BODY_FOUND",
    method: request.raw.method || "NO_METHOD_FOUND"
  };
};

exports.getError = error => {
  return {
    data: {
      message: error.message || "NO_MESSAGE_FOUND",
      validationContext: error.validationContext || "NO_CONTEXT",
      // eslint-disable-next-line no-underscore-dangle
      errors: error.validation || error._errors || "NOT_FOUND",
      code: error.code || "NO_CODE_FOUND",
      constraint: error.constraint || "NO_CONSTRAINT_FOUND",
      detail: error.detail || "NO_DETAIL_FOUND"
    },
    innerError: {
      stack: error.stack || "NO_STACK_FOUND"
    }
  };
};
