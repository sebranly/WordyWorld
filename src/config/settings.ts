// Vendor
import flatten from "lodash/flatten";

export const HEADER_Y = 25;
export const MAX_LETTER_COUNT = 10;
export const MIN_LETTER_COUNT = 2;
export const MIN_SEARCH_LETTER_COUNT = 2;

export const GAME_ROWS = 6;

/*
  TODO: fix if possible
  React-native does not support dynamic imports apparently
  See https://github.com/facebook/react-native/issues/2481#issuecomment-299074154
*/
const DATA: any = {
  letterCountIs2: require("../data/words/2-letters.json"),
  letterCountIs3: require("../data/words/3-letters.json"),
  letterCountIs4: require("../data/words/4-letters.json"),
  letterCountIs5: require("../data/words/5-letters.json"),
  letterCountIs6: require("../data/words/6-letters.json"),
  letterCountIs7: require("../data/words/7-letters.json"),
  letterCountIs8: require("../data/words/8-letters.json"),
  letterCountIs9: require("../data/words/9-letters.json"),
  letterCountIs10: require("../data/words/10-letters.json")
};

const allLetterCounts = Array.from(
  { length: MAX_LETTER_COUNT },
  (_v, k) => k + 1
).filter(v => v >= MIN_LETTER_COUNT);

const jsonArrayTemp = allLetterCounts.map(v => {
  const key = `letterCountIs${v}`;
  return DATA[key];
});

export const ALL_WORDS = flatten(jsonArrayTemp);
