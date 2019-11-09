// Vendor
import * as emoji from "node-emoji";
import * as React from "react";
import get from "lodash/get";
import { Text } from "react-native";

export interface EmojiProps {
  style: any;
  text: string;
}

const Emoji: React.FC<EmojiProps> = props => {
  // Setup
  const { text } = props;

  const emojiObject = emoji.find(text);
  const fallbackEmojiObject = emoji.search(text);
  const fallbackEmojiIcon = get(fallbackEmojiObject, "[0].emoji", null);
  const emojiIcon = emojiObject ? emojiObject.emoji : fallbackEmojiIcon;

  // Short-circuit
  if (!emojiIcon) return null;

  return <Text>{emojiIcon}</Text>;
};

export { Emoji };
