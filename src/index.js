// Require the framework and instantiate it
const fastify = require("fastify")({
  logger: true
});

const fastifyEnv = require("fastify-env");
require("dotenv").config();
const cors = require("fastify-cors");
const fastifyRoutes = require("fastify-routes");
const routes = require("./app");
const { envSchema: schema } = require("./app/commons/schema");

const envOptions = {
  dotenv: true,
  schema
};

function create() {
  // Run the server!
  fastify.register(fastifyEnv, envOptions);
  fastify.register(fastifyRoutes);
  fastify.register(cors);
  // routes
  fastify.register(routes);
  return fastify;
}

function init(fastifyS) {
  fastifyS.listen(3002, function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    fastify.log.info(`server listening on ${address}`);
  });
}

async function start() {
  const fastifyS = create();
  init(fastifyS);
}
try {
  // if not in test run either the command or start() if no command specified
  if (process.env.NODE_ENV !== "test") {
    start();
  }
} catch (err) {
  // eslint-disable-next-line no-console
  logger.error(
    err,
    `Invalid arg '${process.argv[2]}'. Please supply: 'start' OR 'docs'`
  );
}
//start();

module.exports = {
  create,
  start
};
