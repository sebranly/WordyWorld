// Vendor
import isEqual from "lodash/isEqual";

// Internal
import { WordConnection } from "../types/enum";

const findWordConnections = (word1: string, word2: string) => {
  // Obvious cases
  if (isEmpty(word1, word2)) return [];

  if (word1 === word2) {
    return [{ type: WordConnection.Same }];
  }

  // Not same length
  const additionConnections = findAdditionWordConnections(word1, word2);
  if (additionConnections.length) return additionConnections;

  const deletionConnections = findDeletionWordConnections(word1, word2);
  if (deletionConnections.length) return deletionConnections;

  // Same length
  const wordConnections = findReplacementWordConnections(word1, word2);

  if (areAnagrams(word1, word2)) {
    // TODO: need word2
    wordConnections.push({ type: WordConnection.Anagram });
  }

  if (areNeighbors(word1, word2)) {
    // TODO: need word2
    wordConnections.push({ type: WordConnection.Neighbor });
  }

  wordConnections.push(...findPushPullWordConnections(word1, word2));

  return wordConnections;
};

const areAnagrams = (word1: string, word2: string) => {
  if (isEmptyOrSameOrDiffLength(word1, word2)) return false;

  const decomposition1 = decomposeWord(word1);
  const decomposition2 = decomposeWord(word2);

  const valid = isEqual(decomposition1, decomposition2);

  return valid;
};

const areNeighbors = (word1: string, word2: string) => {
  if (isEmptyOrSameOrDiffLength(word1, word2)) return false;

  return word1[0] === word2[0];
};

const isEmpty = (word1: string, word2: string) => {
  return !word1 || !word2;
};

const isEmptyOrSame = (word1: string, word2: string) => {
  return isEmpty(word1, word2) || word1 === word2;
};

const isEmptyOrSameOrDiffLength = (word1: string, word2: string) => {
  return isEmptyOrSame(word1, word2) || word1.length !== word2.length;
};

const decomposeWord = (word: string) => {
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
  if (isEmptyOrSame(word1, word2)) return [];
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
  if (isEmptyOrSameOrDiffLength(word1, word2)) return [];

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

const findPushPullWordConnections = (word1: string, word2: string) => {
  if (isEmptyOrSameOrDiffLength(word1, word2)) return [];
  if (word1.length === 1 || word2.length === 1) return [];

  const { length } = word2;
  const lengthMinusOne = length - 1;

  // TODO: type it
  const wordConnections: any[] = [];
  const beg = word1.slice(0, lengthMinusOne);
  const end = word1.slice(-lengthMinusOne);

  const pullWord = `${end}${word2[lengthMinusOne]}`;
  const pushWord = `${word2[0]}${beg}`;

  const isPullWord = pullWord === word2;
  const isPushWord = pushWord === word2;

  const pushConnection = {
    character: word2[0],
    position: 0,
    type: WordConnection.PushPull
  };

  const pullConnection = {
    character: word2[lengthMinusOne],
    position: lengthMinusOne,
    type: WordConnection.PushPull
  };

  if (isPushWord && isPullWord) {
    return [pushConnection, pullConnection];
  } else if (isPushWord) {
    return [pushConnection];
  } else if (isPullWord) {
    return [pullConnection];
  }

  return wordConnections;
};

const pluralize = (word: string, count: number) =>
  count === 1 ? `${count} ${word}` : `${count} ${word}s`;

export {
  areAnagrams,
  areNeighbors,
  decomposeWord,
  findAdditionWordConnections,
  findDeletionWordConnections,
  findPushPullWordConnections,
  findReplacementWordConnections,
  findWordConnections,
  isEmpty,
  isEmptyOrSame,
  isEmptyOrSameOrDiffLength,
  pluralize
};
