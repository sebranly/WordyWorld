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

  // TODO: I think we can improve it with short-circuits everywhere as they have no intersection
  const additionConnections = findAdditionWordConnections(word1, word2);
  const deletionConnections = findDeletionWordConnections(word1, word2);
  const replacementConnections = findReplacementWordConnections(word1, word2);

  wordConnections.push(
    ...additionConnections,
    ...deletionConnections,
    ...replacementConnections
  );

  return wordConnections;
};

const areAnagrams = (word1: string, word2: string) => {
  if (isSameOrEmpty(word1, word2)) return false;
  if (word1.length !== word2.length) return false;

  const decomposition1 = decomposeWord(word1);
  const decomposition2 = decomposeWord(word2);

  const valid = isEqual(decomposition1, decomposition2);

  return valid;
};

const isSameOrEmpty = (word1: string, word2: string) => {
  return !word1 || !word2 || word1 === word2;
};

const decomposeWord = (word: string) => {
  // TODO: make a function?
  const letters = word.split("");
  // TODO: fix any
  const occurrences: any = {};

  letters.forEach((letter) => {
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
  if (isSameOrEmpty(word1, word2)) return [];

  // TODO: same
  if (word1.length + 1 !== word2.length) return [];

  // TODO: type it
  const wordConnections: any[] = [];

  for (let i = 0; i < word2.length; i++) {
    const beginning = word2.slice(0, i);
    const end = word2.slice(i + 1);
    const newWord2 = `${beginning}${end}`;

    if (word1 === newWord2) {
      const isAddition = type === WordConnection.Addition;
      const characterObject = isAddition ? { character: word2[i] } : {};
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
  if (isSameOrEmpty(word1, word2)) return [];
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
  isSameOrEmpty,
  pluralize
};
