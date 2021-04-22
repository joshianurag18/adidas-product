const CustomError = require("../CustomError");

// eslint-disable-next-line complexity
module.exports = error => {
  if (error.fieldName && (error.message || error.detail)) {
    return CustomError.create(
      error.code || 400,
      error.message || error.detail,
      error.fieldName
    );
  }
  return undefined;
};
