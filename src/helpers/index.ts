// Vendor
import sortBy from "lodash/sortBy";

import { pluralize } from "./strings";

// TODO: add unit tests
const getXLetterWordsSections = (jsonObject: any, searchText: string) => {
  const sortedJsonObject = sortBy(jsonObject, ["englishWord"]);
  const allMixedUpWords = sortedJsonObject.filter((wordObject: any) =>
    wordObject.englishWord.toLowerCase().includes(searchText)
  );

  const allSortedWords: any[] = [];
  let currentGroupOfWords: any = [];
  let currentLetter = 97;

  allMixedUpWords.forEach((wordObject: any) => {
    const firstEnglishLetter = wordObject.englishWord[0].toLowerCase();
    if (firstEnglishLetter === String.fromCharCode(currentLetter)) {
      currentGroupOfWords.push(wordObject.englishWord);
    } else {
      if (currentGroupOfWords.length > 0) {
        allSortedWords.push(currentGroupOfWords);
      }

      currentGroupOfWords = [wordObject.englishWord];
      currentLetter = firstEnglishLetter.charCodeAt(0);
    }
  });

  if (currentGroupOfWords.length > 0) {
    allSortedWords.push(currentGroupOfWords);
  }

  return allSortedWords.map(groupOfWords => {
    const letterSection = groupOfWords[0][0].toUpperCase();
    return {
      title: `${letterSection} (${pluralize("word", groupOfWords.length)})`,
      data: groupOfWords
    };
  });
};

export { getXLetterWordsSections };
