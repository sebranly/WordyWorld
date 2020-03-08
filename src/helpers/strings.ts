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
  // TODO: make a function for next 2?
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
  // TODO: make a function?
  const letters = word.split("");
  // TODO: fix any
  const occurrences: any = {};

  letters.forEach(letter => {
    if (occurrences[letter]) occurrences[letter]++;
    else occurrences[letter] = 1;
  });

  return occurrences;
};

const findAdditionWordConnections = (
  word1: string,
  word2: string,
  type = WordConnection.Addition
) => {
  if (!word1 || !word2) return [];
  if (word1 === word2) return [];

  // TODO: same
  const absLengthDiff = Math.abs(word1.length - word2.length);
  if (absLengthDiff !== 1) return [];

  // TODO: type it
  const wordConnections: any[] = [];

  for (let i = 0; i < word2.length; i++) {
    const beginning = word2.slice(0, i);
    const end = word2.slice(i + 1);
    const newWord2 = `${beginning}${end}`;

    if (word1 === newWord2) {
      const characterObject =
        type === WordConnection.Addition ? { character: word2[i] } : {};
      wordConnections.push({
        ...characterObject,
        position: i,
        type
      });
    }
  }

  return wordConnections;
};

const findDeletionWordConnections = (word1: string, word2: string) => {
  return findAdditionWordConnections(word2, word1, WordConnection.Deletion);
};

const findReplacementWordConnections = (word1: string, word2: string) => {
  if (!word1 || !word2) return [];
  if (word1 === word2) return [];
  if (word1.length !== word2.length) return [];

  // TODO: type it
  const wordConnections: any[] = [];

  for (let i = 0; i < word2.length; i++) {
    const beginning = word2.slice(0, i);
    const middle = word1[i];
    const end = word2.slice(i + 1);
    const newWord2 = `${beginning}${middle}${end}`;

    if (word1 === newWord2) {
      wordConnections.push({
        character: word2[i],
        position: i,
        type: WordConnection.Replacement
      });
    }
  }

  return wordConnections;
};

const pluralize = (word: string, count: number) =>
  count === 1 ? `${count} ${word}` : `${count} ${word}s`;

export {
  areAnagrams,
  decomposeWord,
  findAdditionWordConnections,
  findDeletionWordConnections,
  findReplacementWordConnections,
  findWordConnections,
  pluralize
};
