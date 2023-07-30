module.exports = {
  mutator: "javascript",
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  transpilers: [],
  coverageAnalysis: "off",
  jest: {
    configFile: 'jest.conf.js'
  },
  mutate: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!**/*.test.js',
    '!**/*.test.e2e.js',
    '!**/stryker.conf.js',
    '!**/jest.conf.js',

  ]
};
