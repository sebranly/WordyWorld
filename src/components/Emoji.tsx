// Vendor
import * as emoji from "node-emoji";
import emojiFromText from "emoji-from-text";
import * as React from "react";
import { Text } from "react-native";

export interface EmojiProps {
  style: any;
  text: string;
}

const Emoji: React.FC<EmojiProps> = props => {
  // Setup
  const { text } = props;

  const emojiObject = emoji.find(text);
  const emojiIcon = emojiObject ? emojiObject.emoji : null;

  // Short-circuit
  if (emojiIcon) return <Text>{emojiIcon}</Text>;

  const emojiFallbackTemp = (emojiFromText as any)(text, true);
  const emojiFallbackTemp2 = emojiFallbackTemp ? emojiFallbackTemp.match : null;
  const emojiFallbackTemp3 = emojiFallbackTemp2
    ? emojiFallbackTemp2.toString()
    : null;

  const emojiFallbackTemp4 = emojiFallbackTemp3
    ? emoji.find(emojiFallbackTemp3)
    : null;

  const emojiFallbackIcon = emojiFallbackTemp4
    ? emojiFallbackTemp4.emoji
    : null;

  return emojiFallbackIcon ? <Text>{emojiFallbackIcon}</Text> : null;
};

export { Emoji };
