/* eslint-disable complexity */
const CustomError = require("./CustomError");
const { DEFAULT_MAPPERS } = require("./mappers");
const { formatDetail, getRequest, getError } = require("./common");

module.exports = (mappers = DEFAULT_MAPPERS, options) => (
  error,
  request,
  reply
) => {
  request.log.error({
    request: getRequest(request),
    error: getError(error),
    traceHeaders: request.logTrace
  });
  // eslint-disable-next-line no-restricted-syntax
  for (const mapper of mappers) {
    const resp = mapper(error, options);
    if (resp) {
      return reply.code(resp.code).send(resp.response);
    }
  }
  const unhandledError = CustomError.create(
    500,
    formatDetail(error),
    "",
    "INTERNAL_SERVER_ERROR"
  );
  return reply.code(unhandledError.code).send(unhandledError.response);
};
