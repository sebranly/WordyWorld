// Internal
import { getLetterScore, getWordScore } from "../score";

describe("score helpers", () => {
  let result: number;

  describe("getLetterScore", () => {
    it("returns 0 when not a letter", () => {
      expect(getLetterScore("")).toBe(0);
      expect(getLetterScore("word")).toBe(0);
      expect(getLetterScore("-")).toBe(0);
      expect(getLetterScore("@")).toBe(0);
    });

    it("returns correct mapping for lowercase letters", () => {
      expect(getLetterScore("a")).toBe(1);
      // Test
      expect(getLetterScore("b")).toBe(3);
      expect(getLetterScore("c")).toBe(3);
      expect(getLetterScore("d")).toBe(2);
      expect(getLetterScore("e")).toBe(1);
      expect(getLetterScore("f")).toBe(4);
      expect(getLetterScore("g")).toBe(2);
      expect(getLetterScore("h")).toBe(4);
      expect(getLetterScore("i")).toBe(1);
      expect(getLetterScore("j")).toBe(8);
      expect(getLetterScore("k")).toBe(5);
      expect(getLetterScore("l")).toBe(1);
      expect(getLetterScore("m")).toBe(3);
      expect(getLetterScore("n")).toBe(1);
      expect(getLetterScore("o")).toBe(1);
      expect(getLetterScore("p")).toBe(3);
      expect(getLetterScore("q")).toBe(10);
      expect(getLetterScore("r")).toBe(1);
      expect(getLetterScore("s")).toBe(1);
      expect(getLetterScore("t")).toBe(1);
      expect(getLetterScore("u")).toBe(1);
      expect(getLetterScore("v")).toBe(4);
      expect(getLetterScore("w")).toBe(4);
      expect(getLetterScore("x")).toBe(8);
      expect(getLetterScore("y")).toBe(4);
      expect(getLetterScore("z")).toBe(10);
    });

    it("returns correct mapping for uppercase letters", () => {
      expect(getLetterScore("A")).toBe(1);
      expect(getLetterScore("B")).toBe(3);
      expect(getLetterScore("C")).toBe(3);
      expect(getLetterScore("D")).toBe(2);
      expect(getLetterScore("E")).toBe(1);
      expect(getLetterScore("F")).toBe(4);
      expect(getLetterScore("G")).toBe(2);
      expect(getLetterScore("H")).toBe(4);
      expect(getLetterScore("I")).toBe(1);
      expect(getLetterScore("J")).toBe(8);
      expect(getLetterScore("K")).toBe(5);
      expect(getLetterScore("L")).toBe(1);
      expect(getLetterScore("M")).toBe(3);
      expect(getLetterScore("N")).toBe(1);
      expect(getLetterScore("O")).toBe(1);
      expect(getLetterScore("P")).toBe(3);
      expect(getLetterScore("Q")).toBe(10);
      expect(getLetterScore("R")).toBe(1);
      expect(getLetterScore("S")).toBe(1);
      expect(getLetterScore("T")).toBe(1);
      expect(getLetterScore("U")).toBe(1);
      expect(getLetterScore("V")).toBe(4);
      expect(getLetterScore("W")).toBe(4);
      expect(getLetterScore("X")).toBe(8);
      expect(getLetterScore("Y")).toBe(4);
      expect(getLetterScore("Z")).toBe(10);
    });
  });

  describe("getWordScore", () => {
    it("returns 0 when empty strings", () => {
      result = getWordScore({ en: "", fr: "" });
      expect(result).toBe(0);
    });

    it("returns correct score for a word", () => {
      result = getWordScore({ en: "bike", fr: "" });
      expect(result).toBe(10);

      result = getWordScore({ en: "bike", fr: "vélo" });
      expect(result).toBe(10);
    });
  });
});
