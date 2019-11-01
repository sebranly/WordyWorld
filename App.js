import React from "react";
import { StyleSheet, Text, View } from "react-native";

import SectionListBasics from "./SectionListBasics";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionListBasics letterCount={2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
