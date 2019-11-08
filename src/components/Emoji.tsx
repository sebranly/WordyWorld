// Vendor
import * as emoji from "node-emoji";
import * as React from "react";
import { Text } from "react-native";

export interface EmojiProps {
  style: any;
  text: string;
}

const Emoji: React.FC<EmojiProps> = props => {
  const { text } = props;

  const emojiObject = emoji.find(text);
  const emojiIcon = emojiObject ? emojiObject.emoji : undefined;

  return <Text>{emojiIcon}</Text>;
};

export { Emoji };
