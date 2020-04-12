// Internal
import { Word } from "../types/interfaces";

const getLetterScore = (character: string) => {
  if (character.length !== 1) return 0;

  const letter = character.toLowerCase();

  const onePointLetters = ["a", "e", "i", "o", "u", "l", "n", "s", "t", "r"];
  if (onePointLetters.includes(letter)) return 1;
  if (["d", "g"].includes(letter)) return 2;
  if (["b", "c", "m", "p"].includes(letter)) return 3;
  if (["f", "h", "v", "w", "y"].includes(letter)) return 4;
  if (letter === "k") return 5;
  if (["j", "x"].includes(letter)) return 8;
  if (["q", "z"].includes(letter)) return 10;

  return 0;
};

const getWordScore = (word: Word) => {
  const { englishWord } = word;
  const letters = englishWord.split("");
  const lettersScore = letters.map((letter) => getLetterScore(letter));

  const reducer = (acc: number, val: number) => acc + val;
  const score = lettersScore.reduce(reducer, 0);

  return score;
};

export { getLetterScore, getWordScore };
