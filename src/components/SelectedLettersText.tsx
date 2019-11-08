// Vendor
import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface SelectedLettersTextProps {
  letters?: string;
  style: any;
  text: string;
}

const SelectedLettersText: React.FC<SelectedLettersTextProps> = props => {
  const { letters, style, text } = props;

  if (!letters) {
    return <Text style={style}>{text}</Text>;
  }

  const firstIndex = text.toLowerCase().indexOf(letters.toLowerCase());
  if (firstIndex === -1) {
    return <Text style={style}>{text}</Text>;
  }

  const allTexts = [
    <Text style={styles.textStyle}>{text.substring(0, firstIndex)}</Text>,
    <Text style={[styles.textStyle, styles.occurrence]}>
      {text.substring(firstIndex, firstIndex + letters.length)}
    </Text>,
    <Text style={styles.textStyle}>
      {text.substring(firstIndex + letters.length)}
    </Text>
  ];

  return <View style={[style, styles.inlineWrapper]}>{allTexts}</View>;
};

const styles = StyleSheet.create({
  occurrence: {
    color: "red"
  },
  inlineWrapper: {
    flex: 1,
    flexDirection: "row",
    fontSize: 18
  },
  textStyle: {
    fontSize: 18
  }
});

export { SelectedLettersText };
