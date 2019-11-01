module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "node", "ts", "tsx"],
  preset: "react-native",
  transform: {
    "\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  }
};
