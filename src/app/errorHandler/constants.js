exports.ERROR_CODES_MESSAGES = {
  400: "Bad request parameters",
  401: "Bad or expired token",
  403: "Insufficient permissions to perform an operation over a resource",
  405: "Method not allowed",
  408: "Request Timeout",
  429: "Too Many Requests",
  404: "Resource Not Found",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout"
};

exports.POSTGRES_DB_ERRORS = {
  23502: "NOT_NULL_VIOLATION", // not null violation
  23503: "FOREIGN_KEY_VIOLATION", // foreign_key_violation
  23505: "UNIQUE_KEY_VIOLATION", // unique_violation
  23514: "INVALID_VALUE" // check_violation
};

exports.ERROR_LOGGING_MESSAGES = {
  fatal: "Fatal: Unhandled Error",
  paramsValidation: "Validation Error: Schema Validation Error",
  badRequest: "Validation Error: Bad Request",
  connectionError: "Validation Error: DB Connection Error",
  postgresError: "Validation Error: Postgres Error"
};
