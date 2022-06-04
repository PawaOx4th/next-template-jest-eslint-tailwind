/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.jest.json",
    },
  },
};
