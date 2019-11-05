// Internal
import { getFromEnv } from "../env";

describe("env helper", () => {
  describe("getFromEnv", () => {
    let result: string;

    it("returns environment values", () => {
      result = getFromEnv("NODE_ENV");
      expect(result).toBe("test");
    });

    it("returns empty string otherwise", () => {
      result = getFromEnv("UNKNOWN");
      expect(result).toBe("");
    });
  });
});
