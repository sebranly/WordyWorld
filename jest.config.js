module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "node", "ts", "tsx"],
  preset: "jest-expo",
  transform: {
    "\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  }
};
