module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "node", "ts", "tsx"],
  preset: "@testing-library/react-native",
  transformIgnorePatterns: [
    "node_modules/(?!(react-native" +
      "|@unimodules" +
      "|expo" +
      "|expo-asset" +
      "|expo-file-system" +
      "|expo-font" +
      "|expo-location" +
      "|native-base-shoutem-theme" +
      "|react-native-drawer" +
      "|react-native-easy-grid" +
      "|react-native-iphone-x-helper" +
      "|react-native-keyboard-aware-scroll-view" +
      "|react-native-vector-icons" +
      "|unimodules-permissions-interface" +
      ")/)"
  ]
};
