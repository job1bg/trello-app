export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(scss|sass|css)$": "<rootDir>/__mocks__/styleMock.ts",
    "\\.svg$": "<rootDir>/src/__mocks__/svgMock.ts",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
