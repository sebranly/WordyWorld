module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "node", "ts", "tsx"],
  preset: "@testing-library/react-native",
  transform: {
    "\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native" +
      "|expo(nent)?" +
      "|@expo(nent)?/.*" +
      "|native-base" +
      "|native-base-shoutem-theme" +
      "|react-clone-referenced-element" +
      "|@react-native-community" +
      "|react-native-drawer" +
      "|react-native-easy-grid" +
      "|react-native-iphone-x-helper" +
      "|react-native-keyboard-aware-scroll-view" +
      "|react-native-vector-icons" +
      "|react-navigation" +
      "|@react-navigation/.*|" +
      "|sentry-expo" +
      "|unimodules" +
      "|@unimodules/.*" +
      ")/"
  ]
};
