// Vendor
import * as emoji from "node-emoji";
import * as React from "react";
import emojiFromText from "emoji-from-text";
import get from "lodash/get";
import { Text } from "react-native";

export interface EmojiProps {
  style?: any;
  text: string;
}

const Emoji: React.FC<EmojiProps> = props => {
  // Setup
  const { text } = props;

  const emojiObject = emoji.find(text);
  const emojiIcon = emojiObject ? emojiObject.emoji : null;

  // Short-circuit
  if (emojiIcon) return <Text>{emojiIcon}</Text>;

  const emojiFallbackTemp = emojiFromText(text, true);
  const emojiFallbackIcon = get(emojiFallbackTemp, "match.emoji.char");

  return emojiFallbackIcon ? <Text>{emojiFallbackIcon}</Text> : null;
};

export { Emoji };
