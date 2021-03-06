// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  moduleFileExtensions: ["js", "json", "ts"],
  // NOTE: https://jestjs.io/docs/en/configuration#rootdir-string
  rootDir: ".",
  roots: [
    "<rootDir>/src/",
    "<rootDir>/test/",
  ],
  "testEnvironment": "node",
  testMatch: [
    "**/*.spec.ts"
  ],
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  verbose: true,
};
export default config;
