import nextJest from "next/jest.js"
import type { Config } from "jest"

const createJestConfig = nextJest({
  dir: "./",
})

const config: Config = {
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  moduleNameMapper: {
    // 處理 CSS module
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // 一般 CSS
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

    // 圖片
    "^.+\\.(png|jpg|jpeg|gif|webp|avif|svg)$":
      "<rootDir>/__mocks__/fileMock.js",
    "^@/(.*)$": "<rootDir>/$1",
  },
}

export default createJestConfig(config)
