// Internal
import { pluralize } from "../strings";

describe("strings helper", () => {
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
