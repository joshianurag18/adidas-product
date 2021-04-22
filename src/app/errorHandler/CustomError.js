/* eslint-disable no-underscore-dangle */

// const { ERROR_CODES_MESSAGES } = require("./constants");
const HttpStatus = require("http-status-codes");
const { formatDetail } = require("./common");

module.exports = class CustomError extends Error {
  constructor(httpCode, errors) {
    super();
    this._code = httpCode;
    this._errors = this.getErrorArr(errors);
  }

  getErrorArr(errors) {
    if (!errors) {
      return [
        {
          message: HttpStatus.getStatusText(this._code),
          code: HttpStatus.getStatusText(this._code)
        }
      ];
    }
    return errors;
  }

  get code() {
    return this._code;
  }

  get response() {
    return {
      errors: this._errors
    };
  }

  static create(httpCode, message, property, code) {
    const errors = [this.parse(message, property, code)];
    return new CustomError(httpCode, errors);
  }

  static createError(httpCode, ajvError) {
    const errors = [];
    ajvError.reduce((accumulator, curValue) => {
      errors.push({
        message: formatDetail(curValue.message),
        property: curValue.dataPath || ""
      });
      return accumulator;
    }, {});
    return new CustomError(httpCode, errors);
  }

  static parse(message, property, code) {
    return {
      message: formatDetail(message),
      ...(property && { property }),
      code
    };
  }
};
