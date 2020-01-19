module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "node", "ts", "tsx"],
  preset: "@testing-library/react-native",
  transform: {
    "\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  }
};
