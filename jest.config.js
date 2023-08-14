const config = {
  collectCoverage: true,
  collectCoverageFrom: ["./src/**/*.js"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
    './src/sum.js': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    }
  },
  verbose: true,
};

module.exports = config;
