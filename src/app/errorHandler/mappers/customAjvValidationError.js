const CustomError = require("../CustomError");
const { CUSTOM_AJV_VALIDATION_ERROR } = require("../../commons/constants");
const { getPropertyPath } = require("../common");

module.exports = error => {
  if (error.type && error.type === CUSTOM_AJV_VALIDATION_ERROR) {
    const errors = error.errors.map(val => {
      const property = getPropertyPath(val);
      const message = `${val.message}`;
      return { property, message, code: "VALIDATION_ERROR" };
    });
    return new CustomError(400, errors);
  }
  return undefined;
};
