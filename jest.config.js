const config = {
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '\\.js$': 'babel-jest',
    '\\.ts$': 'ts-jest',
  },
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/test-setup/env-setup.js'],
  setupFilesAfterEnv: ['<rootDir>/test-setup/enzime-setup.js'],
  moduleNameMapper: {
    'app-constants': '<rootDir>/src/constants',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
  },
}

module.exports = config
