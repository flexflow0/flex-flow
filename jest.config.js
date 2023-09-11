// jest.config.js
module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx'],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};

