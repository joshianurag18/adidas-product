module.exports = {
  testEnvironment: "node",
  clearMocks: true,
  testMatch: ["<rootDir>/(src|db-config)/**/?(*.)test.js"],
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/app/plugins/**",
    "!src/app/hooks/**",
    "!src/index.js",
    "!src/app/errorHandler/**"
  ],
  collectCoverage: true,
  coverageDirectory: "coverage"
};
