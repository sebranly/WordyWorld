module.exports = {
  moduleFileExtensions: ["js", "json", "jsx", "node", "ts", "tsx"],
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native" +
    "|@codler/react-native-keyboard-aware-scroll-view" +
    "|@react-native-community/datetimepicker" +
    "|@react-native-picker" +
    "|@unimodules" +
    "|expo" +
    "|expo-asset" +
    "|expo-constants" +
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
