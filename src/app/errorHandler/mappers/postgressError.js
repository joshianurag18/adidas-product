const CustomError = require("../CustomError");
const { POSTGRES_DB_ERRORS } = require("../constants");

module.exports = error => {
  if (error.code && error.detail && POSTGRES_DB_ERRORS[error.code]) {
    const code = `${POSTGRES_DB_ERRORS[error.code]}`;
    const detail = error.stack;
    const fieldName = error.column;
    return CustomError.create(400, detail, fieldName, code);
  }
  return undefined;
};
