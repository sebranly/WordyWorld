import * as React from "react";
import { StyleSheet, View } from "react-native";

import { SectionListBasics } from "./SectionListBasics";

export interface AppProps {}

const App: React.FC<AppProps> = _props => {
  return (
    <View style={styles.container}>
      <SectionListBasics letterCount={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default App;
