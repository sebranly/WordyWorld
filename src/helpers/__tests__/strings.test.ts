// Internal
import {
  areAnagrams,
  decomposeWord,
  findAdditionWordConnections,
  findDeletionWordConnections,
  findReplacementWordConnections,
  findWordConnections,
  pluralize
} from "../strings";
import { WordConnection } from "../../types/enum";

describe("strings helpers", () => {
  it("exports the following helpers", () => {
    expect(typeof areAnagrams).toBe("function");
    expect(typeof decomposeWord).toBe("function");
    expect(typeof findAdditionWordConnections).toBe("function");
    expect(typeof findDeletionWordConnections).toBe("function");
    expect(typeof findReplacementWordConnections).toBe("function");
    expect(typeof findWordConnections).toBe("function");
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

  describe("findAdditionWordConnections", () => {
    // TODO: fix any
    let result: any;

    it("returns empty if any string is empty", () => {
      result = findAdditionWordConnections("", "");
      expect(result).toStrictEqual([]);

      result = findAdditionWordConnections("a", "");
      expect(result).toStrictEqual([]);

      result = findAdditionWordConnections("", "a");
      expect(result).toStrictEqual([]);
    });

    it("returns empty if same word is provided", () => {
      result = findAdditionWordConnections("a", "a");
      expect(result).toStrictEqual([]);
    });

    it("returns connections when applicable", () => {
      result = findAdditionWordConnections("earth", "hearth");
      expect(result).toStrictEqual([
        { character: "h", position: 0, type: WordConnection.Addition }
      ]);

      result = findAdditionWordConnections("heart", "hearth");
      expect(result).toStrictEqual([
        { character: "h", position: 5, type: WordConnection.Addition }
      ]);

      result = findAdditionWordConnections("ten", "then");
      expect(result).toStrictEqual([
        {
          character: "h",
          position: 1,
          type: WordConnection.Addition
        }
      ]);

      result = findAdditionWordConnections("god", "good");
      expect(result).toStrictEqual([
        {
          character: "o",
          position: 1,
          type: WordConnection.Addition
        },
        {
          character: "o",
          position: 2,
          type: WordConnection.Addition
        }
      ]);
    });

    it("returns empty if no word connection", () => {
      result = findAdditionWordConnections("word", "sentence");
      expect(result).toStrictEqual([]);
    });
  });

  describe("findDeletionWordConnections", () => {
    // TODO: fix any
    let result: any;

    it("returns empty if any string is empty", () => {
      result = findDeletionWordConnections("", "");
      expect(result).toStrictEqual([]);

      result = findDeletionWordConnections("a", "");
      expect(result).toStrictEqual([]);

      result = findDeletionWordConnections("", "a");
      expect(result).toStrictEqual([]);
    });

    it("returns empty if same word is provided", () => {
      result = findDeletionWordConnections("a", "a");
      expect(result).toStrictEqual([]);
    });

    it("returns connections when applicable", () => {
      result = findDeletionWordConnections("hearth", "earth");
      expect(result).toStrictEqual([
        { position: 0, type: WordConnection.Deletion }
      ]);

      result = findDeletionWordConnections("hearth", "heart");
      expect(result).toStrictEqual([
        { position: 5, type: WordConnection.Deletion }
      ]);

      result = findDeletionWordConnections("then", "ten");
      expect(result).toStrictEqual([
        { position: 1, type: WordConnection.Deletion }
      ]);

      result = findDeletionWordConnections("good", "god");
      expect(result).toStrictEqual([
        {
          position: 1,
          type: WordConnection.Deletion
        },
        {
          position: 2,
          type: WordConnection.Deletion
        }
      ]);
    });

    it("returns empty if no word connection", () => {
      result = findDeletionWordConnections("sentence", "word");
      expect(result).toStrictEqual([]);
    });
  });

  describe("findReplacementWordConnections", () => {
    // TODO: fix any
    let result: any;

    it("returns empty if any string is empty", () => {
      result = findReplacementWordConnections("", "");
      expect(result).toStrictEqual([]);

      result = findReplacementWordConnections("a", "");
      expect(result).toStrictEqual([]);

      result = findReplacementWordConnections("", "a");
      expect(result).toStrictEqual([]);
    });

    it("returns empty if same word is provided", () => {
      result = findReplacementWordConnections("a", "a");
      expect(result).toStrictEqual([]);
    });

    it("returns connections when applicable", () => {
      result = findReplacementWordConnections("bar", "car");
      expect(result).toStrictEqual([
        { character: "c", position: 0, type: WordConnection.Replacement }
      ]);

      result = findReplacementWordConnections("dig", "dog");
      expect(result).toStrictEqual([
        { character: "o", position: 1, type: WordConnection.Replacement }
      ]);

      result = findReplacementWordConnections("car", "cat");
      expect(result).toStrictEqual([
        { character: "t", position: 2, type: WordConnection.Replacement }
      ]);
    });

    it("returns empty if no word connection", () => {
      result = findReplacementWordConnections("word", "sentence");
      expect(result).toStrictEqual([]);
    });
  });

  describe("findWordConnections", () => {
    // TODO: fix any
    let result: any;

    it("returns empty if any string is empty", () => {
      result = findWordConnections("", "");
      expect(result).toStrictEqual([]);

      result = findWordConnections("a", "");
      expect(result).toStrictEqual([]);

      result = findWordConnections("", "a");
      expect(result).toStrictEqual([]);
    });

    it("returns Same if same word is provided", () => {
      result = findWordConnections("a", "a");
      expect(result).toStrictEqual([{ type: WordConnection.Same }]);

      result = findWordConnections("word", "word");
      expect(result).toStrictEqual([{ type: WordConnection.Same }]);
    });

    it("returns Anagram when applicable", () => {
      result = findWordConnections("dog", "god");
      expect(result).toStrictEqual([{ type: WordConnection.Anagram }]);
    });

    it("returns Addition when applicable", () => {
      result = findWordConnections("ten", "then");
      expect(result).toStrictEqual([
        { character: "h", position: 1, type: WordConnection.Addition }
      ]);
    });

    it("returns Deletion when applicable", () => {
      result = findWordConnections("then", "ten");
      expect(result).toStrictEqual([
        { position: 1, type: WordConnection.Deletion }
      ]);
    });

    it("returns Replacement when applicable", () => {
      result = findWordConnections("bar", "car");
      expect(result).toStrictEqual([
        { character: "c", position: 0, type: WordConnection.Replacement }
      ]);
    });

    it("returns empty if no word connection", () => {
      result = findWordConnections("word", "sentence");
      expect(result).toStrictEqual([]);
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
