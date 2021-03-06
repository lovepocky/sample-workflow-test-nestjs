// jest.config.ts
import type { Config } from '@jest/types';

// !! add below for vscode jestrunner
// !! "jestrunner.codeLensSelector": "**/*.{test,spec,e2e-spec}.{js,jsx,ts,tsx}"

// Sync object
const config: Config.InitialOptions = {
  moduleFileExtensions: ["js", "json", "ts"],
  // NOTE: https://jestjs.io/docs/en/configuration#rootdir-string
  rootDir: "..",
  roots: [
    "<rootDir>/src/",
    "<rootDir>/test/",
  ],
  "testEnvironment": "node",
  // testRegex: "/*/.*\\.(e2e-spec)\\.ts$",
  testMatch: [
    "**/*.e2e-spec.ts"
  ],
  transform: {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  verbose: true,
};
export default config;
