// Internal
import { areAnagrams, decomposeWord, pluralize } from "../strings";

describe("strings helper", () => {
  it("exports the following helpers", () => {
    expect(typeof areAnagrams).toBe("function");
    expect(typeof decomposeWord).toBe("function");
    expect(typeof pluralize).toBe("function");
  });

  describe("areAnagrams", () => {
    let result: boolean;

    it("returns false if any string is empty", () => {
      result = areAnagrams("", "");
      expect(result).toBe(false);

      result = areAnagrams("", "a");
      expect(result).toBe(false);

      result = areAnagrams("a", "");
      expect(result).toBe(false);
    });

    it("returns false if same string is provided twice", () => {
      result = areAnagrams("word", "word");
      expect(result).toBe(false);
    });

    it("returns true if words are anagrams", () => {
      result = areAnagrams("dog", "god");
      expect(result).toBe(true);

      result = areAnagrams("chien", "niche");
      expect(result).toBe(true);
    });

    it("returns false if the letters are different", () => {
      result = areAnagrams("rap", "dog");
      expect(result).toBe(false);

      result = areAnagrams("mouse", "house");
      expect(result).toBe(false);

      result = areAnagrams("word", "house");
      expect(result).toBe(false);

      // Notice how all letters of 'dog' appears in 'good'
      result = areAnagrams("dog", "good");
      expect(result).toBe(false);

      // Notice how all letters of 'dog' appears in 'dogs'
      result = areAnagrams("dog", "dogs");
      expect(result).toBe(false);
    });
  });

  describe("decomposeWord", () => {
    // TODO: fix any
    let result: any;

    it("returns empty object for empty string", () => {
      result = decomposeWord("");
      expect(result).toStrictEqual({});
    });

    it("returns object with letters", () => {
      result = decomposeWord("word");
      expect(result).toStrictEqual({ w: 1, o: 1, r: 1, d: 1 });
    });

    it("handles words with a letter appearing several times", () => {
      result = decomposeWord("attack");
      expect(result).toStrictEqual({ a: 2, t: 2, c: 1, k: 1 });
    });
  });

  describe("pluralize", () => {
    let result: string;

    it("returns same string if occurrence is 1", () => {
      result = pluralize("apple", 1);
      expect(result).toBe("1 apple");
    });

    it("returns string with an -s if occurrence is not 1", () => {
      result = pluralize("apple", 0);
      expect(result).toBe("0 apples");

      result = pluralize("apple", 2);
      expect(result).toBe("2 apples");
    });
  });
});
