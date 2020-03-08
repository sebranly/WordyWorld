// Vendor
import isEqual from "lodash/isEqual";

// Internal
import { WordConnection } from "../types/enum";

const findWordConnections = (word1: string, word2: string) => {
  if (!word1 || !word2) return [];

  if (word1 === word2) {
    return [{ type: WordConnection.Same }];
  }

  // TODO: type it
  const wordConnections: any[] = [];

  if (areAnagrams(word1, word2)) {
    wordConnections.push({
      type: WordConnection.Anagram
    });
  }

  return wordConnections;
};

const areAnagrams = (word1: string, word2: string) => {
  if (!word1 || !word2) return false;
  if (word1 === word2) return false;

  // TODO: verify if it's faster thanks to this
  if (word1.length !== word2.length) return false;

  const decomposition1 = decomposeWord(word1);
  const decomposition2 = decomposeWord(word2);

  const valid = isEqual(decomposition1, decomposition2);

  return valid;
};

const decomposeWord = (word: string) => {
  const letters = word.split("");
  // TODO: fix any
  const occurrences: any = {};

  letters.forEach(letter => {
    if (occurrences[letter]) occurrences[letter]++;
    else occurrences[letter] = 1;
  });

  return occurrences;
};

const pluralize = (word: string, count: number) =>
  count === 1 ? `${count} ${word}` : `${count} ${word}s`;

export { areAnagrams, decomposeWord, findWordConnections, pluralize };
