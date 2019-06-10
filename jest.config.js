// TODO: Make the typescript/babel transforms cleaner

module.exports = {
  transform: {
    "^.+\\.tsx?$": `<rootDir>/jest-preprocess.js`,
    "^.+\\.js?$": `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/mocks/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFiles: [`<rootDir>/jest-loader.js`],
}
