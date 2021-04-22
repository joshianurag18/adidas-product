// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  testEnvironment: "node",
  clearMocks: true,
  testMatch: ["<rootDir>/test/integration/__tests__/**/?(*.)test.js"],
  collectCoverageFrom: ["src/**/*.js", "!src/**/*.test.js"],
  collectCoverage: true,
  coverageDirectory: "integration-coverage",
  modulePathIgnorePatterns: [
    "<rootDir>/src/.*/__mocks__",
    "<rootDir>/__mocks__"
  ]
  // setupFiles: ["./jest.setup.integration.js"]
};
