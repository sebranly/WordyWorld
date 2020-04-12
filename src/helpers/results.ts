// Vendor
import sortBy from "lodash/sortBy";

// Internal
import { pluralize } from "./strings";

const getResultsCount = (results: any) => {
  const reducer = (accumulator: number, currentValue: any) => {
    return accumulator + currentValue.data.length;
  };

  const count = results.reduce(reducer, 0);
  return count;
};

// TODO: add unit tests
const getResults = (jsonArray: any[], searchText: string) => {
  const sortedJsonObject = sortBy(jsonArray, [(word) => word.en.toLowerCase()]);

  const allMixedUpWords = sortedJsonObject.filter((wordObject: any) =>
    wordObject.en.toLowerCase().includes(searchText)
  );

  const allSortedWords: any[] = [];
  let currentGroupOfWords: any = [];
  let currentLetter = 97;

  allMixedUpWords.forEach((wordObject: any) => {
    const firstEnglishLetter = wordObject.en[0].toLowerCase();
    if (firstEnglishLetter === String.fromCharCode(currentLetter)) {
      currentGroupOfWords.push(wordObject.en);
    } else {
      if (currentGroupOfWords.length > 0) {
        allSortedWords.push(currentGroupOfWords);
      }

      currentGroupOfWords = [wordObject.en];
      currentLetter = firstEnglishLetter.charCodeAt(0);
    }
  });

  if (currentGroupOfWords.length > 0) {
    allSortedWords.push(currentGroupOfWords);
  }

  const results = allSortedWords.map((groupOfWords) => {
    const letterSection = groupOfWords[0][0].toUpperCase();
    return {
      title: `${letterSection} (${pluralize("word", groupOfWords.length)})`,
      data: groupOfWords,
    };
  });

  return results;
};

export { getResults, getResultsCount };
